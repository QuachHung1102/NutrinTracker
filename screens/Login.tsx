import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import * as CLASS from '../assets/Class'
import * as SVG from '../assets/svgXml'
import styles, { vw } from '../assets/stylesheet'
import clrStyle from '../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import * as CTEXT from '../assets/CustomText'
import { SvgXml } from 'react-native-svg'
import { LoginWithFirebaseHandle, RegisterWithFirebaseHandle } from '../assets/component'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { currentSetUser, RootContext } from '../data/store'
import { saveUser } from '../data/storageFunc'
import getColor from '../assets/getColor'

export default function Login() {
    const navigation = useNavigation();
    const [isLogin, setIsLogin] = React.useState(false)
    const [CurentCache, dispatch] = React.useContext(RootContext)

    const [useName, setUseName] = React.useState('')
    const [passWord, setPassWord] = React.useState('')
    const [rePassWord, setRePassWord] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [letAgree, setLetAgree] = React.useState(false)

    let auth = getAuth();

    const handleLogin = async () => {
        await LoginWithFirebaseHandle(email, passWord, navigation, signInWithEmailAndPassword, auth, dispatch, currentSetUser, saveUser)
    }
    const handleRegister = async () => {
        await RegisterWithFirebaseHandle(navigation, createUserWithEmailAndPassword, updateProfile, auth, dispatch, currentSetUser, saveUser, email, useName, passWord,)
    }

    const Login = () => {
        return (
            <CLASS.ViewColStartCenter style={[styles.flex1, styles.gap4vw, styles.paddingH4vw,]}>
                <CTEXT.Play30Reg style={[styles.gap2vw, styles.marginBottom4vw, styles.textCenter]}>Đăng nhập</CTEXT.Play30Reg>
                <CLASS.Input value={email} onChange={setEmail} placeHolder='Email' icon={<SvgXml xml={mailIcon} width={vw(6)} height={vw(6)} />} otherOption={{ autoCapitalize: 'none', keyboardType: 'email-address', textContentType: 'emailAddress' }} />
                <CLASS.Input value={passWord} onChange={setPassWord} placeHolder='Mật khẩu' icon={<SvgXml xml={passIcon} width={vw(6)} height={vw(6)} />} otherOption={{ autoCapitalize: 'none', textContentType: 'password', secureTextEntry: true }} />
                <TouchableOpacity
                    onPress={() => Alert.alert('Vui lòng liên hệ với chúng tôi để lấy lại mật khẩu')}
                    style={[styles.alignSelfStart]}>
                    <CTEXT.Be16Med style={[{ color: getColor('Main mode/100') }]}>Quên mật khẩu?</CTEXT.Be16Med>
                </TouchableOpacity>
                <CLASS.RoundBtn
                    onPress={handleLogin}
                    title='Đăng nhập' bgColor={getColor('Main mode/100')} textClass={CTEXT.Be16Med} textColor='white' customStyle={[styles.paddingV6vw, styles.justifyContentCenter, styles.borderRadius2vw]} />
                <View style={[styles.flex1]} />
                <TouchableOpacity
                    onPress={() => setIsLogin(false)}
                    style={[styles.paddingV8vw]}>
                    <CTEXT.Be16Med style={[{ color: clrStyle.black }]}>Chưa có tài khoản, <CTEXT.Be16Med style={[{ color: getColor('Main mode/100') }]}>Đăng ký?</CTEXT.Be16Med></CTEXT.Be16Med>
                </TouchableOpacity>
            </CLASS.ViewColStartCenter>
        )
    }

    const Register = () => {
        return (
            <CLASS.ViewColStartCenter style={[styles.flex1, styles.gap4vw, styles.paddingH4vw,]}>
                <CTEXT.Play30Reg style={[styles.gap2vw, styles.marginBottom4vw, styles.textCenter]}>Đăng ký</CTEXT.Play30Reg>
                <CLASS.Input value={useName} onChange={setUseName} placeHolder='Tên đăng nhập' icon={<View style={[styles.borderRadius100, styles.margin1vw, { backgroundColor: getColor('Main mode/100'), width: vw(4), height: vw(4) }]} />} otherOption={{ autoCapitalize: 'words' }} />
                <CLASS.Input value={email} onChange={setEmail} placeHolder='Email' icon={<SvgXml xml={mailIcon} width={vw(6)} height={vw(6)} />} otherOption={{ autoCapitalize: 'none', keyboardType: 'email-address', textContentType: 'emailAddress' }} />
                <CLASS.Input value={passWord} onChange={setPassWord} placeHolder='Mật khẩu' icon={<SvgXml xml={passIcon} width={vw(6)} height={vw(6)} />} otherOption={{ autoCapitalize: 'none', textContentType: 'password', secureTextEntry: true }} />
                <CLASS.Input value={rePassWord} onChange={setRePassWord} placeHolder='Nhập lại mật khẩu' icon={<SvgXml xml={passIcon} width={vw(6)} height={vw(6)} />} otherOption={{ autoCapitalize: 'none', textContentType: 'password', secureTextEntry: true }} />
                <TouchableOpacity
                    onPress={() => setLetAgree(!letAgree)}
                    style={[styles.marginVertical2vw, styles.flexRowCenter, styles.gap3vw]}>
                    <View style={[{ width: vw(6), height: vw(6), borderWidth: letAgree ? 3 : 1, borderColor: getColor('Grey/60'), backgroundColor: letAgree ? getColor('Main mode/100') : undefined }]} />
                    <CTEXT.Be16Reg style={[styles.flex1, { color: getColor('Grey/60') }]}>Đồng ý với mọi điều khoản về thông tin và bảo mật của ứng dụng</CTEXT.Be16Reg>
                </TouchableOpacity>
                <CLASS.RoundBtn
                    otherTouchProps={{ disabled: !letAgree }}
                    onPress={handleRegister}
                    title='Đăng ký' bgColor={getColor('Main mode/100')} textClass={CTEXT.Be16Med} textColor='white' customStyle={[styles.paddingV6vw, styles.justifyContentCenter, styles.borderRadius2vw]} />
                <View style={[styles.flex1]} />
                <TouchableOpacity
                    onPress={() => setIsLogin(true)}
                    style={[styles.paddingV8vw]}>
                    <CTEXT.Be16Med style={[{ color: clrStyle.black }]}>Đã có tài khoản? <CTEXT.Be16Med style={[{ color: getColor('Main mode/100') }]}>Đăng nhập.</CTEXT.Be16Med></CTEXT.Be16Med>
                </TouchableOpacity>
            </CLASS.ViewColStartCenter>
        )
    }


    return (
        <CLASS.SSBarWithSaveArea>
            <CLASS.TopNav3ItemWithTitle showBack nav={navigation} />
            {isLogin ? Login() : Register()}
        </CLASS.SSBarWithSaveArea>
    )
}

export const mailIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="#C4CF8C"/></svg>`
export const passIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8293 11C12.4175 9.83481 11.3062 9 10 9C8.34315 9 7 10.3431 7 12C7 13.6569 8.34315 15 10 15C11.3062 15 12.4175 14.1652 12.8293 13L16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11L12.8293 11ZM10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44771 11 9 11.4477 9 12C9 12.5523 9.44771 13 10 13Z" fill="#C4CF8C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="#C4CF8C"/></svg>`
