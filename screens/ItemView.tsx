import { View, Text, FlatList, TouchableOpacity, ScrollView, Image, ImageStyle } from 'react-native'
import React, { useEffect } from 'react'
import * as CLASS from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import { factoryData } from '../data/factoryData'
import styles, { vw } from '../assets/stylesheet'
import * as CTEXT from '../assets/CustomText'
import getColor from '../assets/getColor'
import { RootContext } from '../data/store'
import clrStyle from '../assets/componentStyleSheet'
import * as FORMATDATA from '../data/interfaceFormat'
import * as SVG from '../assets/svgXml'
import { SvgXml } from 'react-native-svg'

export default function ItemView({ route }: any) {
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = React.useContext(RootContext)
    const [item, setItem] = React.useState<FORMATDATA.ItemFormat>()
    const [spiceItem, setSpiceItem] = React.useState<FORMATDATA.ItemSpiceFormat>()

    useEffect(() => {
        const unSub = navigation.addListener('focus', () => {
            if (route.params?.item) {
                return setItem(route.params.item)
            }
            if (route.params?.spiceItem) {
                return setSpiceItem(route.params.spiceItem)
            }
        })
        return unSub
    }, [navigation])

    function renderItem() {
        return (
            <>
                <View style={[styles.alignSelfCenter, styles.padding3vw, { borderRadius: vw(14), backgroundColor: getColor('Grey/10') }]}>
                    <Image source={item?.imgAddress?.uri} style={[{ width: vw(50), height: vw(50), borderRadius: vw(14) } as ImageStyle]} />
                </View>
                <CLASS.ViewRowEvenlyCenter>
                    <CTEXT.Be18Reg color={getColor('Grey/100')}>100ml</CTEXT.Be18Reg>
                    <View style={[styles.padding2vw, styles.paddingH3vw, styles.borderRadius100, { backgroundColor: getColor('Main mode/100') }]}><CTEXT.Be18Med color={getColor('Content/light white')}>100g</CTEXT.Be18Med></View>
                    <CTEXT.Be18Reg color={getColor('Grey/100')}>1 {item?.unit}</CTEXT.Be18Reg>
                </CLASS.ViewRowEvenlyCenter>

                <View>
                    <SvgXml xml={`<svg width="375" height="70" viewBox="0 0 375 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="50" width="4" height="20" fill="white"/><rect x="23.625" width="4" height="70" fill="white"/><rect x="46.75" y="43" width="4" height="27" fill="white"/><rect x="69.875" y="16" width="4" height="54" fill="#F4F5F7"/><rect x="93" y="32" width="4" height="38" fill="#F4F5F7"/><rect x="116.125" y="56" width="4" height="14" fill="#F4F5F7"/><rect x="139.25" y="29" width="4" height="41" fill="#F4F5F7"/><rect x="162.375" y="43" width="4" height="27" fill="#F4F5F7"/><rect x="185.5" y="5" width="4" height="65" fill="#64721C"/><rect x="208.625" y="43" width="4" height="27" fill="#F4F5F7"/><rect x="231.75" y="34" width="4" height="36" fill="#F4F5F7"/><rect x="254.875" y="5" width="4" height="65" fill="#F4F5F7"/><rect x="278" y="36" width="4" height="34" fill="#F4F5F7"/><rect x="301.125" y="29" width="4" height="41" fill="#F4F5F7"/><rect x="324.25" y="57" width="4" height="13" fill="white"/><rect x="347.375" y="16" width="4" height="54" fill="white"/><rect x="370.5" y="37" width="4" height="33" fill="white"/></svg>`} style={[styles.alignSelfCenter]} />
                    <CTEXT.Play30Reg style={[styles.alignSelfCenter, styles.marginTop2vw]} color={getColor('Content/dark/1')}>{item?.nutri?.calo} calo</CTEXT.Play30Reg>
                </View>

                <CLASS.ViewRowBetweenCenter style={[styles.w100, styles.gap3vw]}>
                    <CLASS.ViewColCenter style={[styles.borderRadius2vw, styles.marginTop2vw, styles.paddingTop6vw, styles.paddingBottom4vw, styles.positionRelative, styles.flex1, { backgroundColor: getColor('Grey/10') }]}>
                        <CTEXT.Be18Reg color={getColor('Grey/100')}>{item?.nutri?.fat}g</CTEXT.Be18Reg>
                        <View style={[styles.positionAbsolute, styles.borderRadius100, styles.bgcolorWhite, styles.border2, { borderColor: 'white', top: -vw(4.5) }]}>
                            <SvgXml width={vw(8)} height={vw(8)} xml={`<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 27.5C22.4036 27.5 28 21.9036 28 15C28 8.09644 22.4036 2.5 15.5 2.5C8.59644 2.5 3 8.09644 3 15C3 21.9036 8.59644 27.5 15.5 27.5Z" fill="#E65A4B"/><path d="M11.626 19.2326C11.426 19.2326 11.226 19.1589 11.0681 19.0011C10.7628 18.6958 10.7628 18.1905 11.0681 17.8853L17.9628 10.9905C18.268 10.6853 18.7733 10.6853 19.0786 10.9905C19.3838 11.2958 19.3838 11.8011 19.0786 12.1063L12.1838 19.0011C12.026 19.1589 11.826 19.2326 11.626 19.2326Z" fill="white"/><path d="M12.0579 10.4326C11.2053 10.4326 10.5 11.1274 10.5 11.9905C10.5 12.8432 11.1947 13.5484 12.0579 13.5484C12.9105 13.5484 13.6158 12.8537 13.6158 11.9905C13.6053 11.1274 12.9105 10.4326 12.0579 10.4326Z" fill="white"/><path d="M18.9422 16.4642C18.0895 16.4642 17.3843 17.1589 17.3843 18.0221C17.3843 18.8747 18.079 19.58 18.9422 19.58C19.7948 19.58 20.5001 18.8853 20.5001 18.0221C20.5001 17.1589 19.8053 16.4642 18.9422 16.4642Z" fill="white"/></svg>`} />
                        </View>
                        <CTEXT.Be14Reg color={getColor('Grey/100')}>Fat</CTEXT.Be14Reg>
                    </CLASS.ViewColCenter>
                    <CLASS.ViewColCenter style={[styles.borderRadius2vw, styles.marginTop2vw, styles.paddingTop6vw, styles.paddingBottom4vw, styles.positionRelative, styles.flex1, { backgroundColor: getColor('Grey/10') }]}>
                        <CTEXT.Be18Reg color={getColor('Grey/100')}>{item?.nutri?.fat}g</CTEXT.Be18Reg>
                        <View style={[styles.positionAbsolute, styles.borderRadius100, styles.bgcolorWhite, styles.border2, { borderColor: 'white', top: -vw(4.5) }]}>
                            <SvgXml width={vw(8)} height={vw(8)} xml={`<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 27.5C22.4036 27.5 28 21.9036 28 15C28 8.09644 22.4036 2.5 15.5 2.5C8.59644 2.5 3 8.09644 3 15C3 21.9036 8.59644 27.5 15.5 27.5Z" fill="#FFC700"/><path d="M15.5 12.3375C14.8875 12.3375 14.375 12.8375 14.375 13.4625V16.55C14.375 17.175 14.875 17.675 15.5 17.675C16.125 17.675 16.625 17.175 16.625 16.55V13.4625C16.625 12.8375 16.1125 12.3375 15.5 12.3375Z" fill="white"/><path d="M15.5 21.9375C12.225 21.9375 9.5625 19.275 9.5625 16V14C9.5625 10.725 12.225 8.0625 15.5 8.0625C18.775 8.0625 21.4375 10.725 21.4375 14V16C21.4375 19.275 18.775 21.9375 15.5 21.9375ZM15.5 9.9375C13.2625 9.9375 11.4375 11.7625 11.4375 14V16C11.4375 18.2375 13.2625 20.0625 15.5 20.0625C17.7375 20.0625 19.5625 18.2375 19.5625 16V14C19.5625 11.7625 17.7375 9.9375 15.5 9.9375Z" fill="white"/></svg>`} />
                        </View>
                        <CTEXT.Be14Reg color={getColor('Grey/100')}>Fat</CTEXT.Be14Reg>
                    </CLASS.ViewColCenter>
                    <CLASS.ViewColCenter style={[styles.borderRadius2vw, styles.marginTop2vw, styles.paddingTop6vw, styles.paddingBottom4vw, styles.positionRelative, styles.flex1, { backgroundColor: getColor('Grey/10') }]}>
                        <CTEXT.Be18Reg color={getColor('Grey/100')}>{item?.nutri?.fat}g</CTEXT.Be18Reg>
                        <View style={[styles.positionAbsolute, styles.borderRadius100, styles.bgcolorWhite, styles.border2, { borderColor: 'white', top: -vw(4.5) }]}>
                            <SvgXml width={vw(8)} height={vw(8)} xml={`<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 27.5C22.4036 27.5 28 21.9036 28 15C28 8.09644 22.4036 2.5 15.5 2.5C8.59644 2.5 3 8.09644 3 15C3 21.9036 8.59644 27.5 15.5 27.5Z" fill="#D1E4E2"/><path d="M17.3728 16.8749C18.8895 15.3583 19.2798 13.2895 18.2445 12.2543C17.2093 11.2191 15.1405 11.6093 13.6239 13.126C12.1072 14.6427 11.7169 16.7114 12.7522 17.7467C13.7874 18.7819 15.8561 18.3916 17.3728 16.8749Z" fill="white"/></svg>`} />
                        </View>
                        <CTEXT.Be14Reg color={getColor('Grey/100')}>Fat</CTEXT.Be14Reg>
                    </CLASS.ViewColCenter>

                </CLASS.ViewRowBetweenCenter>
                <CTEXT.Be22Med>Information 🌱</CTEXT.Be22Med>
            </>
        )
    }

    function renderSpiceItem() {
        return (
            <View style={[styles.alignSelfCenter, styles.padding3vw, { borderRadius: vw(14), backgroundColor: getColor('Grey/10') }]}>
                {/* <Image source={item.} style={[clrStyle.imgItem, { borderRadius: vw(14) } as ImageStyle]} /> */}
            </View>
        )
    }

    return (
        <CLASS.SSBarWithSaveArea bgColor={clrStyle.white}>
            <CLASS.TopNav3ItemWithTitle title={item?.name || spiceItem?.name} textCenter showBack nav={navigation} iconRight={SVG.saveNutri(vw(6), vw(6))} />
            <ScrollView contentContainerStyle={[styles.gap8vw]} style={[styles.paddingH6vw, styles.paddingTop4vw, styles.flex1]}>
                {
                    item ? renderItem() : renderSpiceItem()
                }
            </ScrollView>
        </CLASS.SSBarWithSaveArea>
    )
}