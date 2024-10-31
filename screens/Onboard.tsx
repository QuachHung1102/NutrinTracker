import { View, Text, TouchableOpacity, Image, ImageStyle, Animated, } from 'react-native'
import React from 'react'
import styles, { vw } from '../assets/stylesheet'
import * as Class from '../assets/Class'
import { statusBarTransparency } from '../assets/component'
import { useNavigation } from '@react-navigation/native'
import clrStyle, { NGHIASTYLE } from '../assets/componentStyleSheet'
import { Be16Reg, Be18Med, Be24Med, Play40Black } from '../assets/CustomText'
import { rightLongArrow } from '../assets/svgXml'
import getColor from '../assets/getColor'

export default function Onboard() {
    const navigation = useNavigation();
    const [step, setStep] = React.useState(0);

    const onbData = [
        [require('../assets/photos/onboard1.png'), 'Theo dõi chỉ số đạt mục tiêu sức khỏe', 'Xây dựng kế hoạch khoa học từ dinh dưỡng, bài tập phù hợp với từng mục tiêu cá nhân'],
        [require('../assets/photos/onboard2.png'), 'Cung cấp hàng ngàn công thức nấu ăn hấp dẫn', 'Gợi ý cho bạn công thức phù hợp với thời gian, sở thích, mục tiêu lối sống của mình'],
        [require('../assets/photos/onboard3.png'), 'Bài tập', 'Không thể thiếu theo dõi vận động'],
    ]

    const widthAnimates = onbData.map(() => React.useRef(new Animated.Value(0)).current);
    const colorAnimates = onbData.map(() => React.useRef(new Animated.Value(0)).current);

    const animate = (itemIndex: number) => {
        widthAnimates.forEach((widthAnimate, index) => {
            Animated.timing(widthAnimate, {
                toValue: index === itemIndex - 1 ? 1 : 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        });

        colorAnimates.forEach((colorAnimate, index) => {
            Animated.timing(colorAnimate, {
                toValue: index === itemIndex - 1 ? 1 : 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        });
    };

    React.useEffect(() => {
        if (step == 4) {
            setStep(3)
            return navigation.navigate('Login' as never);
        } else {
            animate(step);
        }
    }, [step]);

    class StepBar extends React.Component<{ step: number }> {
        render(): React.ReactNode {
            return (
                <Class.ViewRowCenter style={[styles.gap2vw]}>
                    {onbData.map((item, index) => {
                        const widthAnimate = widthAnimates[index].interpolate({
                            inputRange: [0, 1],
                            outputRange: [vw(2.5), vw(8)]
                        });
                        const colorAnimate = colorAnimates[index].interpolate({
                            inputRange: [0, 1],
                            outputRange: [getColor('Grey/100') as string, getColor('Main mode/100') as string]
                        });

                        return (
                            <Animated.View key={index} style={[styles.borderRadius100, { height: vw(2.5), width: widthAnimate, backgroundColor: colorAnimate }]} />
                        );
                    })}
                </Class.ViewRowCenter>
            );
        }
    }

    class OnboardClass extends React.Component<{ img: any, title: string, subtitle: string }> {
        render(): React.ReactNode {
            return (
                <Class.ViewColBetweenCenter style={[styles.flex1, styles.paddingTop10vw]}>
                    <View style={[styles.w100]}>
                        <Image source={this.props.img} style={[styles.w70, styles.alignSelfCenter, styles.h50vh, { resizeMode: 'contain' }] as ImageStyle} />
                        <StepBar step={step} />
                    </View>
                    <Class.ViewColCenter style={[styles.w100, styles.gap2vw]}>
                        <Be24Med style={[styles.textCenter, styles.w60vw, { color: clrStyle.black }]}>{this.props.title}</Be24Med>
                        <Be16Reg style={[styles.marginHorizontal8vw, styles.textCenter]}>{this.props.subtitle}</Be16Reg>
                    </Class.ViewColCenter>

                    <Class.ViewColCenter style={[styles.marginVertical4vw, styles.paddingBottom8vw, styles.gap3vw]}>
                        <TouchableOpacity onPress={() => { setStep(step + 1) }}
                            style={[styles.flexRowCenter, styles.gap2vw, styles.padding3vw, styles.wm30vw, styles.borderRadius2vw, { backgroundColor: getColor('Main mode/100') }]}>
                            <Be18Med style={{ color: clrStyle.white }}>{step == onbData.length ? `Bắt đầu` : `Tiếp`}</Be18Med>
                            {rightLongArrow(vw(4), vw(4))}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setStep(4) }}
                            style={[styles.flexRowCenter, styles.gap2vw, styles.padding3vw, styles.wm30vw, styles.borderRadius2vw, { backgroundColor: clrStyle.white, opacity: step == onbData.length ? 0 : 1 }]}>
                            <Be18Med style={{ color: getColor('Main mode/100') }}>Bỏ qua</Be18Med>
                        </TouchableOpacity>
                    </Class.ViewColCenter>
                </Class.ViewColBetweenCenter>
            )
        }
    }

    let renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <TouchableOpacity
                        style={[styles.flex1]}
                        onPress={() => setStep(1)}>
                        <Image source={require('../assets/photos/onboardBg.png')} style={[styles.w100, styles.h50vh, styles.positionAbsolute, { resizeMode: 'cover' }] as ImageStyle} />
                        <View style={[styles.flex1, styles.w100vw, styles.flexColCenter]}>
                            <Image source={require('../assets/photos/onboard.png')} style={[styles.w80vw, styles.h50vh, { resizeMode: 'contain' }] as ImageStyle} />
                        </View>
                        <Class.ViewColCenter style={[styles.paddingV4vw, styles.h30vh, styles.marginBottom10vw]}>
                            <Play40Black style={[styles.textCenter, { color: getColor('Main mode/80') }]}>Nutrition</Play40Black>
                            <Play40Black style={[styles.textCenter, { color: getColor('Main mode/80') }]}>Foods</Play40Black>
                        </Class.ViewColCenter>
                    </TouchableOpacity>
                )
            case 1:
                return <OnboardClass img={onbData[0][0]} title={onbData[0][1]} subtitle={onbData[0][2]} />
            case 2:
                return <OnboardClass img={onbData[1][0]} title={onbData[1][1]} subtitle={onbData[1][2]} />
            case 3:
                return <OnboardClass img={onbData[2][0]} title={onbData[2][1]} subtitle={onbData[2][2]} />
            default:
                break;
        }
    }

    return (
        <View style={[styles.flex1]}>
            {statusBarTransparency(false, false)}
            {renderStep()}
        </View>
    )
}