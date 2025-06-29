// system imports
import React, { Component, ComponentType, ReactElement, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, Alert, Share, StatusBar, ImageStyle, Platform } from "react-native";
import { PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";

// Firebase imports
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

// style import
import styles from "./stylesheet";
import { vw, vh, vmax, vmin } from './stylesheet';
import Svg, { SvgXml } from 'react-native-svg';
import clrStyle, { componentStyle } from "./componentStyleSheet";

// SVG import
import * as SVG from "./svgXml";

import * as FORMATDATA from '../data/interfaceFormat'
import * as CUSTOMCACHE from '../data/store'
import * as STORAGEFNC from '../data/storageFunc'

// font import 

// ____________________END OF IMPORT_______________________


// UNIVERSE FUNCTION________________________________________

export const marginBottomForScrollView = (time?: number) => {
    return (
        <View style={[styles.h10vh]} />
    )
}

export const statusBarTransparency = (lightContent: boolean = true, margin: boolean = false) => {
    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
    return (
        <View>
            <StatusBar barStyle={lightContent ? 'light-content' : 'dark-content'}
                backgroundColor='rgba(0,0,0,0)'
                translucent={true}
            />
            {margin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
        </View>
    )
}

// share fnc 

export const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error: any) {
        Alert.alert(error.message);
    }
};

export const ListGen = (customStyle: any, data: string | Array<string | string[]>, FontClass1st: ComponentType<any>, useColor: string = clrStyle.white as string, bullet1st: string = '1', FontClass2nd: ComponentType<any> = FontClass1st, bullet2nd: string = '-', textIndent2nd: any = 0) => {
    function bulletMark(bullet: string, index: number) {
        let i = index == 0 ? 0 : index % 2 == 0 ? index / 2 : index
        if (bullet === 'a') {
            function abullet(i: number) {
                let charNum = 26, charStart = 97
                let char = String.fromCharCode(charStart + i % charNum)
                if (i >= charNum) {
                    return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                } else {
                    return char + '.'
                }
            }
            return abullet(i)

        } else if (bullet === 'A') {
            function Abullet(i: number) {
                let charNum = 26, charStart = 65
                let char = String.fromCharCode(charStart + i % charNum)
                if (i >= charNum) {
                    return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                } else {
                    return char + '.'
                }
            }
            return Abullet(i)

        } else if (bullet === 'I') {
            // make bullet as a roman number
            function Ibullet(i: number) {
                let romanNum = {
                    1: 'I',
                    2: 'II',
                    3: 'III',
                    4: 'IV',
                    5: 'V',
                    6: 'VI',
                    7: 'VII',
                    8: 'VIII',
                    9: 'IX',
                    10: 'X',
                    100: 'C',
                    1000: 'M',
                    500: 'D',
                    50: 'L',
                    5000: 'V',
                }

                let roman = ''
                let num = i + 1
                let romanNumArr = Object.keys(romanNum).map(Number).sort((a, b) => b - a)

            }
            return Ibullet(i)

        } else if (bullet === '1') {
            return i + 1 + '.'

        } else {
            return bullet
        }

    }

    return (
        <View>
            {typeof data == 'string' ?

                <FontClass1st style={{ ...customStyle, color: useColor }}>{data}</FontClass1st>

                : data.map((item, index) => {
                    if (typeof item === 'string') {
                        return (
                            <View key={index} style={[styles.flexRow, styles.w100]}>
                                <FontClass1st style={{ color: useColor }}>{bulletMark(bullet1st, index)} </FontClass1st>
                                <FontClass1st style={{ color: useColor }}>{item}</FontClass1st>
                            </View>
                        )
                    } else if (Array.isArray(item)) {
                        return (
                            <View key={index} style={[styles.w100, { paddingLeft: textIndent2nd }]}>
                                {item.map((subItem, subIndex) => {
                                    return (
                                        <View key={subIndex} style={[styles.flexRow]}>
                                            <FontClass2nd style={{ color: useColor }}>{bulletMark(bullet2nd, subIndex)} </FontClass2nd>
                                            <FontClass2nd style={{ color: useColor, ...customStyle }}>{subItem}</FontClass2nd>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    }
                })}
        </View>
    )
}


/**
 * Formats a number by adding suffixes for thousands, millions, and billions.
 * @param num - The number to be formatted.
 * @param changeToChar - Whether to change the number to a character (K, M, B) or not.
 * @returns The formatted number as a string.
 */
export function formatNumber(num: number, changeToChar: boolean = true) {
    if (changeToChar) {
        if (num >= 1_000_000_000) {
            return `${(num / 1_000_000_000).toFixed(2)}B`;
        } else if (num >= 1_000_000) {
            return `${(num / 1_000_000).toFixed(2)}M`;
        } else if (num >= 1_000) {
            return `${(num / 1_000).toFixed(2)}K`;
        } else {
            return num.toString();
        }
    } else {
        return new Intl.NumberFormat('de-DE').format(num);
    }
}

/**
 * Login function with Firebase authentication
 * @param email - User email
 * @param password - User password
 * @param navigation - Navigation object
 * @param dispatch - Redux dispatch function
 * @param setUser - Redux action to set user
 * @param saveUser - Function to save user to storage
 */
export async function LoginWithFirebaseHandle(
    email: string,
    password: string,
    navigation: any,
    dispatch: (action: any) => void,
    setUser: (user: any) => any,
    saveUser: (user: any) => void
) {
    email = email.trim();
    password = password.trim();
    if (email === '' || password === '') {
        return Alert.alert('Vui lòng điền đủ thông tin');
    }

    const auth = getAuth();
    
    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential;

                if (user.user.email) {
                    let userObj = {
                        email: user.user.email,
                        name: user.user.displayName ? user.user.displayName : user.user.email,
                        password: password,
                        imgAddress: user.user.photoURL ? user.user.photoURL : ''
                    }
                    saveUser(userObj)
                    dispatch(setUser(userObj));
                } else {
                    return Alert.alert('Đăng nhập thất bại', 'Email hoặc mật khẩu bạn nhập chưa đúng')
                }
            }).then(() => {
                return navigation.navigate('BottomTab' as never)
            })
            .catch((error) => {
                // Handle Firebase authentication errors with user-friendly messages
                let errorMessage = 'Có lỗi xảy ra khi đăng nhập';
                
                switch (error.code) {
                    case 'auth/user-not-found':
                        errorMessage = 'Không tìm thấy tài khoản với email này. Vui lòng kiểm tra lại hoặc đăng ký tài khoản mới.';
                        break;
                    case 'auth/wrong-password':
                        errorMessage = 'Mật khẩu không đúng. Vui lòng thử lại.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Email không hợp lệ. Vui lòng nhập đúng định dạng email.';
                        break;
                    case 'auth/user-disabled':
                        errorMessage = 'Tài khoản này đã bị vô hiệu hóa. Vui lòng liên hệ hỗ trợ.';
                        break;
                    case 'auth/too-many-requests':
                        errorMessage = 'Quá nhiều lần đăng nhập thất bại. Vui lòng thử lại sau.';
                        break;
                    case 'auth/invalid-credential':
                        errorMessage = 'Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.';
                        break;
                    default:
                        errorMessage = 'Email hoặc mật khẩu bạn nhập chưa đúng';
                        break;
                }
                
                Alert.alert(
                    'Đăng nhập thất bại',
                    errorMessage,
                    [
                        {
                            text: 'Đóng',
                            style: 'default'
                        }
                    ]
                );
                
                // Only log in development mode
                if (__DEV__) {
                    console.error('Login error:', error);
                }
            })
    } catch (error) {
        // Only log in development mode
        if (__DEV__) {
            console.log(error);
        }
        return Alert.alert('Đăng nhập thất bại', 'Email hoặc mật khẩu bạn nhập chưa đúng')
    }
}


/**
 * Register function with Firebase authentication
 * @param navigation - The navigation object used to navigate between screens
 * @param dispatch - Function to dispatch actions to the Redux store
 * @param setUser - Function to set the user in the Redux store
 * @param saveUser - Function to save the user data
 * @param email - The email of the user
 * @param userName - The name of the user
 * @param password - The password of the user
 * @param params - Additional parameters to be merged into the user object
 */
export async function RegisterWithFirebaseHandle(
    navigation: any,
    dispatch: (action: any) => void,
    setUser: (user: any) => any,
    saveUser: (user: any) => void,
    email: string,
    userName: string,
    password: string,
    ...params: { [key: string]: any }[]
) {
    const auth = getAuth();
    
    try {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((_userCredential) => {
                let user = auth.currentUser;
                const avtURL = params.find(param => param.hasOwnProperty('avtURL'))?.avtURL || '';
                if (user && avtURL) {
                    updateProfile(user, {
                        displayName: userName,
                        photoURL: avtURL,
                    })
                        .then(() => {
                            // Only log in development mode
                            if (__DEV__) {
                                console.log("User profile updated.");
                            }
                        })
                        .catch((error) => {
                            // Only log in development mode
                            if (__DEV__) {
                                console.error("Error updating profile:", error);
                            }
                        });
                }
            })
            .then(() => {
                /**
                 * Creates a user object with the provided email, name, password, and additional parameters.
                 */
                let user = {
                    email: email,
                    name: userName,
                    password: password,
                    ...params.reduce((acc, param) => ({ ...acc, ...param }), {})
                }
                saveUser(user)
                dispatch(setUser(user));
            })
            .then(() => {
                return navigation.navigate('BottomTab' as never)
            })
            .catch((error) => {
                // Handle Firebase authentication errors with user-friendly messages
                let errorMessage = 'Có lỗi xảy ra khi đăng ký tài khoản';
                
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'Email này đã được sử dụng để đăng ký. Vui lòng sử dụng email khác hoặc đăng nhập.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Email không hợp lệ. Vui lòng nhập đúng định dạng email.';
                        break;
                    case 'auth/weak-password':
                        errorMessage = 'Mật khẩu quá yếu. Vui lòng sử dụng mật khẩu mạnh hơn (ít nhất 6 ký tự).';
                        break;
                    case 'auth/operation-not-allowed':
                        errorMessage = 'Đăng ký bằng email và mật khẩu hiện không được phép.';
                        break;
                    case 'auth/too-many-requests':
                        errorMessage = 'Quá nhiều yêu cầu đăng ký. Vui lòng thử lại sau.';
                        break;
                    default:
                        errorMessage = `Lỗi đăng ký: ${error.message}`;
                        break;
                }
                
                Alert.alert(
                    'Đăng ký thất bại',
                    errorMessage,
                    [
                        {
                            text: 'Đóng',
                            style: 'default'
                        }
                    ]
                );
                
                // Only log in development mode
                if (__DEV__) {
                    console.error('Registration error:', error);
                }
            })

    } catch (error) {
        // Only log in development mode
        if (__DEV__) {
            console.log(error);
        }
    }
}

// export async function searchEngine(keyword: string, dataBank: SetFormat[] | Desk[] | Card[], type: 'set' | 'desk' | 'card') {
//     keyword = keyword.trim();
//     let result: SetFormat[] | Desk[] | Card[] = [];
//     const regex = new RegExp(`\\b${keyword}`, 'i');

//     if (type === 'set' && dataBank as SetFormat[]) {
//         result = dataBank.filter((item): item is SetFormat =>
//             (item as SetFormat).name !== undefined && regex.test((item as SetFormat).name)
//         );
//     } else if (type === 'desk' && dataBank as Desk[]) {
//         result = dataBank.filter((item): item is Desk =>
//             (item as Desk).title !== undefined && regex.test((item as Desk).title)
//         );
//     } else if (type === 'card' && dataBank as Card[]) {
//         result = dataBank.filter((item): item is Card =>
//             (item as Card).front !== undefined && regex.test((item as Card).front)
//         );
//     }

//     if (keyword === '') {
//         return [];
//     }

//     return result;
// }

export const onRefresh = (refreshFnc: (item: boolean) => void, navFnc: any) => {
    const handleRefresh = useCallback(() => {
        refreshFnc(true);
        setTimeout(() => {
            refreshFnc(false);
            navFnc.reset({
                index: 0,
                routes: [{ name: 'Home' as never }],
            });
        }, 1000);
    }, [navFnc]);

    return handleRefresh;
};

export const showInDeverlopFnc = () => {
    return Alert.alert('This function is in development')
}


// img picker and camera.
// require >>>> react-native-image-picker <<<< package
// import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

// const defaultCameraOptions: CameraOptions = {
//     mediaType: 'photo',
//     quality: 1,
// };

// export const requestCameraPermission = async () => {
//     if (Platform.OS === 'android') {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.CAMERA,
//                 {
//                     title: 'Camera Permission',
//                     message: 'This app needs camera access to take pictures',
//                     buttonNeutral: 'Ask Me Later',
//                     buttonNegative: 'Cancel',
//                     buttonPositive: 'OK',
//                 },
//             );
//             console.log('Camera permission:', granted);

//             return granted === PermissionsAndroid.RESULTS.GRANTED;
//         } catch (err) {
//             console.warn(err);
//             return false;
//         }
//     } else {
//         return true;
//     }
// };

// export const requestGalleryPermission = async () => {
//     if (Platform.OS === 'android') {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//                 {
//                     title: 'Gallery Permission',
//                     message: 'This app needs gallery access to take pictures',
//                     buttonNeutral: 'Ask Me Later',
//                     buttonNegative: 'Cancel',
//                     buttonPositive: 'OK',
//                 },
//             );
//             return granted === PermissionsAndroid.RESULTS.GRANTED;
//         } catch (err) {
//             console.warn(err);
//             return false;
//         }
//     } else {
//         return true;
//     }
// }

// export const openCamera = async (saveImgFnc: (item: any) => void, options = defaultCameraOptions) => {
//     const hasPermission = await requestCameraPermission();
//     if (!hasPermission) {
//         console.log('Camera permission denied');
//         return;
//     }

//     try {
//         launchCamera(options, (response: any) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.errorCode) {
//                 console.log('ImagePicker Error: ', response.errorMessage);
//                 Alert.alert('Error', response.errorMessage || response.errorCode);
//             } else if (response.assets && response.assets.length > 0) {
//                 saveImgFnc(response.assets[0].uri);
//             }
//         });
//     } catch (error) {
//         console.error('Error launching camera:', error);
//         Alert.alert('Error', 'An unexpected error occurred while launching the camera.');
//     }
// };

// export const openGallery = async (saveImgFnc: (item: any) => void, options = defaultCameraOptions) => {
//     // const hasPermission = await requestGalleryPermission();
//     // if (!hasPermission) {
//     //     console.log('Gallery permission denied');
//     //     return;
//     // }

//     try {
//         launchImageLibrary(options, (response: any) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.errorCode) {
//                 console.log('ImagePicker Error: ', response.errorMessage);
//                 Alert.alert('Error', response.errorMessage || response.errorCode);
//             } else if (response.assets && response.assets.length > 0) {
//                 saveImgFnc(response.assets[0].uri);
//             }
//         });
//     } catch (error) {
//         console.error('Error launching image library:', error);
//         Alert.alert('Error', 'An unexpected error occurred while launching the image library.');
//     }
// }
// END OF UNIVERSE FUNCTION________________________________________