
import { View, SafeAreaView, Alert, Image, ImageStyle, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import styles, { vw } from '../assets/stylesheet'
import * as CLASS from '../assets/Class'
import { statusBarTransparency } from '../assets/component'
import clrStyle, { NGHIASTYLE } from '../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import * as SVG from '../assets/svgXml'
import * as STORAGEFNC from '../data/storageFunc'
import * as FORMATDATA from '../data/interfaceFormat'
import * as CUSTOMCACHE from '../data/store'
import * as COMPONENTS from '../assets/component'

export default function DataCollect({ route }: any) {
    const navigation = useNavigation();
    const [CurrentCache, dispatch] = useContext(CUSTOMCACHE.RootContext);

    const [currentStep, setCurrentStep] = React.useState(0)
    const [showGoBack, setShowGoBack] = React.useState(false)
    const [subTitleColor, setSubTitleColor] = React.useState(NGHIASTYLE.NghiaGray200)

    // data
    const [userName, setUserName] = React.useState('')
    const [age, setAge] = React.useState('')
    const [imgAddress, setImgAddress] = React.useState('')

    const required = [userName, age]
    const list = [userName, age, imgAddress]

    useEffect(() => {
        STORAGEFNC.getUser().then((res) => {
            if (res && res.name !== '') {
                dispatch(CUSTOMCACHE.currentSetUser(res))
                navigation.navigate('BottomTab' as never);
            }
        })
    }, [currentStep])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (route.params) {
                let step = route.params.step;
                if (step === 0) {
                    setCurrentStep(step);
                }
            }
        });
        return unsubscribe;
    }, [navigation]);


    function currentStepAdjust(act: boolean) {
        if (act && required[currentStep]?.toString().trim().length === 0) {
            Alert.alert('Please fill in all fields');
            return;
        }

        if (act) {
            if (currentStep < list.length - 1) {
                setShowGoBack(false);
                setCurrentStep(currentStep + 1);
            } else if (currentStep === list.length - 1) {
                handleFinalStep();
            }
        } else {
            if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
            } else if (currentStep === 0) {
                handleGoBack();
            }
        }
    }

    function handleFinalStep() {
        let userData: FORMATDATA.UserFormat = {
            name: userName,
            age: age,
            imgAddress: imgAddress
        };
        if (userData.name !== '' || userData.age !== '') {
            STORAGEFNC.saveUser(userData).then((res) => {
                if (res) {
                    dispatch(CUSTOMCACHE.currentSetUser(userData));
                    navigation.navigate('BottomTab' as never);
                }
            });
        }
    }

    function handleGoBack() {
        setShowGoBack(true);
        if (showGoBack) {
            navigation.goBack();
        }
    }

    // list of interest and favorite subject

    function inputBox() {
        switch (currentStep) {
            case 0:
                return (
                    <CLASS.BoardingInput
                        activeColor={NGHIASTYLE.NghiaWarning800 as string}
                        passiveColor={NGHIASTYLE.NghiaGray500 as string}
                        title='Your Name'
                        value={userName}
                        autoCap='words'
                        onChgText={setUserName as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
            case 1:
                return (
                    <CLASS.BoardingInput
                        activeColor={NGHIASTYLE.NghiaWarning800 as string}
                        passiveColor={NGHIASTYLE.NghiaGray500 as string}
                        title='Your age'
                        value={age}
                        isNumber={true}
                        onChgText={setAge as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
            case 2:
                return (
                    <>
                        <CLASS.BoardingInput
                            activeColor={NGHIASTYLE.NghiaWarning800 as string}
                            passiveColor={NGHIASTYLE.NghiaGray500 as string}
                            title='Select a profile picture'
                            placeholder='You can plase a photo link here'
                            value={imgAddress}
                            onChgText={setImgAddress as React.Dispatch<React.SetStateAction<string | number>>}
                            subTitle='Or you can take a photo or choose from gallery'
                        />
                        {imgAddress ?
                            <Image
                                style={[styles.w100, styles.h50vw] as ImageStyle}
                                source={{ uri: imgAddress }}
                            />
                            :
                            <View
                                style={[styles.w100, styles.h50vw, styles.flexRowCenter, styles.gap1vw, styles.borderRadius16, { backgroundColor: NGHIASTYLE.NghiaGray200 as string }]}
                            >
                                <TouchableOpacity
                                    onPress={() => { COMPONENTS.openGallery(setImgAddress) }}
                                    style={[styles.flexRowCenter, styles.w40, styles.h50]}>
                                    {SVG.imgPickerIcon(vw(20), vw(20))}
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { COMPONENTS.openCamera(setImgAddress) }}
                                    style={[styles.flexRowCenter, styles.w40, styles.h50]}>
                                    {SVG.cameraIcon(vw(15), vw(15))}
                                </TouchableOpacity>
                            </View>
                        }
                    </>
                )
        }
    }

    return (
        <SafeAreaView style={[styles.flex1]}>
            {statusBarTransparency(false, true)}
            <View style={[styles.flexCol, styles.flex1, styles.justifyContentSpaceBetween, styles.paddingH5vw]}>
                <CLASS.Nunito24Reg style={[styles.w60vw, { color: NGHIASTYLE.NghiaWarning800 }]}>Before jumping in, let's know each orther</CLASS.Nunito24Reg>

                {/* input box */}
                {inputBox()}

                <View style={[styles.flexCol, styles.gap2vw]}>
                    <CLASS.ProcessBarSelfMade
                        barLength={vw(90)}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        totalStep={list.length}
                        round={vw(100)}
                        barHeight={vw(2)}
                        onStartedProcess={true}
                        bgBarColor={clrStyle.white as string}
                        bgProcessColor={NGHIASTYLE.NghiaWarning800 as string} />

                    <CLASS.BoardingNavigation
                        fnc={currentStepAdjust}
                        currentStep={currentStep}
                        dataLength={list.length}
                        showGoBack={showGoBack}
                        activeArrowColor={NGHIASTYLE.NghiaWarning800 as string}
                        passiveArrowColor={NGHIASTYLE.NghiaError800 as string}
                        activeColor={NGHIASTYLE.NghiaWarning100 as string}
                        passiveColor={NGHIASTYLE.NghiaGray200 as string}
                        leftTitle='Go back?'
                        rightTitle='Jump to our journey'
                    />
                </View>
            </View>
        </SafeAreaView >
    )
}