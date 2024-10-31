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

export default function CatePage() {
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = React.useContext(RootContext)

  const [cateList, setCateList] = React.useState(factoryData.cateList)
  const [itemInEachCate, setItemInEachCate] = React.useState<{ name: string, items: string[], itemWithDATA: any[] }[]>([])
  const [selectedCate, setSelectedCate] = React.useState(factoryData.cateList[0].name)

  useEffect(() => {
    const unsubs = navigation.addListener('focus', () => {
      let dataInCate: { name: string, items: string[], itemWithDATA: any[] }[] = []
      cateList.forEach((cate) => {
        let ret = {
          name: cate.name,
          items: cate.items,
          itemWithDATA: factoryData.itemList.filter((item) => cate.items.includes(item.name))
        }
        if (cate.name === 'Gia vị') {
          ret.itemWithDATA = factoryData.spiceList
        }
        dataInCate.push(ret)
        console.log(ret.itemWithDATA);
      })
      setItemInEachCate(dataInCate)
    })
    return unsubs
  }, [])

  return (
    <CLASS.SSBarWithSaveArea>
      <CLASS.TopNav3ItemWithTitle title='Danh mục' textCenter showBack nav={navigation} />

      <View style={[styles.paddingV4vw]}>
        <FlatList
          data={factoryData.cateList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            let isSelected = selectedCate === item.name ? true : false
            let isTheFirst = item.name === factoryData.cateList[0].name ? true : false
            return (
              <TouchableOpacity
                onPress={() => { setSelectedCate(item.name) }}
                style={[styles.marginRight4vw, styles.padding4vw, styles.borderRadius4vw, { backgroundColor: isSelected ? clrStyle.white : getColor('Background/6'), borderWidth: isSelected ? 2 : 0, marginLeft: isTheFirst ? vw(4) : 0, }]}>
                {/* <Image source={item.imgAddress} style={[styles.w100, styles.h100, styles.borderRadius4vw]} /> */}
                <CTEXT.Be16Med style={[{ color: getColor('Content/dark/1') }]}>{item.name}</CTEXT.Be16Med>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      <FlatList
        data={itemInEachCate.find((cate) => cate.name === selectedCate)?.itemWithDATA}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={[styles.alignSelfCenter]}
        contentContainerStyle={[styles.padding4vw]}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (selectedCate === 'Gia vị') {
                  navigation.navigate('ItemView', { spiceItem: item })
                } else {
                  navigation.navigate('ItemView', { item: item })
                }
              }}
              style={[styles.paddingH2vw, styles.paddingV4vw, styles.flexColCenter, styles.gap2vw]}>
              {item.imgAddress ? <Image source={item.imgAddress.uri} resizeMethod='resize' resizeMode='cover' style={[{ width: vw(25), height: vw(25) }, styles.borderRadius4vw, styles.overflowHidden] as ImageStyle} /> : null}
              <CTEXT.Be16Med style={[{ color: getColor('Content/dark/1') }]}>{item.name}</CTEXT.Be16Med>
              {item.nutri ? <CTEXT.Be14Med color={getColor('Grey/100')}>{item.nutri.calo} calo</CTEXT.Be14Med> : null}
            </TouchableOpacity>
          )
        }}
      />

    </CLASS.SSBarWithSaveArea>
  )
}