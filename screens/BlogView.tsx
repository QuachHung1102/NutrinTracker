import { View, Text, Image, ScrollView, ImageStyle } from 'react-native'
import React, { useEffect } from 'react'
import * as CLASS from '../assets/Class'
import * as CUSTOMCACHE from '../data/store'
import * as FORMATDATA from '../data/interfaceFormat'
import * as SVG from '../assets/svgXml'
import { useNavigation } from '@react-navigation/native'
import styles, { vw } from '../assets/stylesheet'
import { NGHIASTYLE } from '../assets/componentStyleSheet'
import { ListGen, marginBottomForScrollView } from '../assets/component'

export default function BlogView({ route }: any) {
    const [CurrentCache, dispatch] = React.useContext(CUSTOMCACHE.RootContext);
    const navigation = useNavigation();
    const [data, setData] = React.useState<FORMATDATA.BlogPostFormat>();
    const [title, setTitle] = React.useState<string>('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setTitle(route.params.title);
            setData({ ...route.params.data, uploadDate: new Date(route.params.data.uploadDate) });
        }
        );
        return unsubscribe;
    }, [navigation])

    return (
        <CLASS.SSBarWithSaveArea bgColor={NGHIASTYLE.NghiaWarning25}>
            <CLASS.TopNav3ItemWithTitle title={title} nav={navigation} icon={SVG.save(vw(6), vw(6))} fnc={() => { }} />
            {data?.title ?
                <ScrollView>
                    <Image source={{ uri: data.imgAddress }} style={{ width: vw(100), height: vw(60) }} resizeMethod='resize' resizeMode='cover' />
                    <CLASS.ViewCol style={[styles.paddingH6vw, styles.paddingV4vw, styles.gap6vw]}>
                        <CLASS.ViewCol style={[styles.gap3vw]}>
                            <CLASS.Inter20Bold style={{ lineHeight: vw(7) }}>{data.title} ({data.detail.timeHappen})</CLASS.Inter20Bold>
                            <CLASS.Inter14Bold style={{ color: NGHIASTYLE.NghiaWarning800 }}>{data.character}</CLASS.Inter14Bold>
                            <CLASS.ViewRowStartCenter style={[styles.colGap4vw, styles.w100, styles.flexWrap]}>
                                <CLASS.ViewRowCenter>
                                    {SVG.calendar(vw(6), vw(6))}
                                    <CLASS.Inter12Reg style={{ color: NGHIASTYLE.NghiaGray400 }}> {data.uploadDate.getDate()} th{data.uploadDate.getMonth() + 1}</CLASS.Inter12Reg>
                                </CLASS.ViewRowCenter>
                                <CLASS.ViewRowCenter>
                                    {SVG.clock(vw(6), vw(6))}
                                    <CLASS.Inter12Reg style={{ color: NGHIASTYLE.NghiaGray400 }}> {data.readTime} đọc</CLASS.Inter12Reg>
                                </CLASS.ViewRowCenter>
                                <CLASS.ViewRowCenter>
                                    {SVG.eye(vw(6), vw(6))}
                                    <CLASS.Inter12Reg style={{ color: NGHIASTYLE.NghiaGray400 }}> {data.view ? data.view : 0} lượt xem</CLASS.Inter12Reg>
                                </CLASS.ViewRowCenter>
                            </CLASS.ViewRowStartCenter>
                        </CLASS.ViewCol>

                        {/* hr */}
                        <View style={[styles.w100, { borderBottomWidth: 1, borderColor: NGHIASTYLE.NghiaWarning100 as string }]} />

                        {/* content */}
                        <RenderContentSection title='Nguyên nhân bối cảnh' data={data.detail.context} />
                        <RenderContentSection title='Diễn biến chính' data={data.detail.mainStory} />
                        <RenderContentSection title='Kết quả và ý nghĩa' data={data.detail.result} />
                        <Image source={{ uri: data.detail.image[0] }} style={[styles.flex1, styles.h50vh, { top: 0 }] as ImageStyle} resizeMethod='resize' resizeMode='contain' />
                        {marginBottomForScrollView()}
                    </CLASS.ViewCol>
                </ScrollView>
                :
                <CLASS.Inter16Bold>Đang tải dữ liệu</CLASS.Inter16Bold>}

        </CLASS.SSBarWithSaveArea>
    )
}

export class RenderContentSection extends React.Component<{ title: string, data: string | Array<string | string[]> }> {
    render() {
        return (
            <CLASS.ViewRowStartCenter style={[styles.gap3vw]} >
                <CLASS.ViewColBetweenCenter style={[styles.gap1vw]}>
                    <View style={[styles.border2, styles.borderRadius100, { width: vw(4), height: vw(4), borderColor: NGHIASTYLE.NghiaWarning800 as string, backgroundColor: NGHIASTYLE.NghiaWarning600 as string }]} />
                    <View style={[styles.flex1, { borderLeftWidth: 0.5, borderColor: NGHIASTYLE.NghiaGray400 as string }]} />
                    <View style={[styles.borderRadius100, { width: vw(2), height: vw(2), backgroundColor: NGHIASTYLE.NghiaWarning600 as string, }]} />
                </CLASS.ViewColBetweenCenter>
                <CLASS.ViewCol style={[styles.flex1, styles.gap2vw]}>
                    <CLASS.Inter16Bold style={{ color: NGHIASTYLE.NghiaWarning800 }}>{this.props.title}</CLASS.Inter16Bold>
                    <View style={[styles.w100]}>{ListGen({ textAlign: 'justify', lineHeight: vw(5) }, this.props.data, CLASS.Inter14Reg, NGHIASTYLE.NghiaGray600 as string, '',)}</View>
                </CLASS.ViewCol>
            </CLASS.ViewRowStartCenter >
        )
    }
}