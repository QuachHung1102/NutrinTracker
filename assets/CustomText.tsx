import { Component } from "react";
import { Text } from "react-native";
import { vw } from "./stylesheet";

export class Be12Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Regular', fontSize: vw(3), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be12Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Medium', fontSize: vw(3), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be12Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Bold', fontSize: vw(3), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be12Black extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Black', fontSize: vw(3), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be14Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Regular', fontSize: vw(3.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be14Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Medium', fontSize: vw(3.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be14Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Bold', fontSize: vw(3.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be14Black extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Black', fontSize: vw(3.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be16Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Regular', fontSize: vw(4), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be16Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Medium', fontSize: vw(4), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be16Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Bold', fontSize: vw(4), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be16Black extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Black', fontSize: vw(4), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be18Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Regular', fontSize: vw(4.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be18Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Medium', fontSize: vw(4.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be18Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Bold', fontSize: vw(4.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be18Black extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Black', fontSize: vw(4.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be20Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Regular', fontSize: vw(5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be20Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Medium', fontSize: vw(5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be20Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Bold', fontSize: vw(5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be20Black extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Black', fontSize: vw(5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be22Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Regular', fontSize: vw(5.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be22Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Medium', fontSize: vw(5.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be22Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Bold', fontSize: vw(5.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be22Black extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Black', fontSize: vw(5.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be24Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Regular', fontSize: vw(6), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be24Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Medium', fontSize: vw(6), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Be24Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'BeVietnamPro-Bold', fontSize: vw(6), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don12Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Regular', fontSize: vw(3), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don12Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Bold', fontSize: vw(3), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don14Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Regular', fontSize: vw(3.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don14Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Bold', fontSize: vw(3.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don16Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Regular', fontSize: vw(4), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don16Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Bold', fontSize: vw(4), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don18Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Regular', fontSize: vw(4.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don18Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Bold', fontSize: vw(4.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don20Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Regular', fontSize: vw(5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don20Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Bold', fontSize: vw(5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don24Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Regular', fontSize: vw(6), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Don24Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Dosis-Bold', fontSize: vw(6), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Play40Black extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'PlayfairDisplay-Black', fontSize: vw(10), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}

export class Play30Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: string }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'PlayfairDisplay-Regular', fontSize: vw(7.5), color: this.props.color }, style]}>
                {children}
            </Text>
        );
    }
}