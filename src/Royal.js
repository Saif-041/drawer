import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.headerText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() => alert('Name: ' + item.val + '\nMRP: ' + item.mrp + '\nDescription: ' + item.description)}>
            <Text style={styles.text}>
              {key + 1}. {item.val} - {item.mrp}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Royal = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false)
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text style={styles.titleText}>Rate List</Text>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              {multiSelect
                ? 'Enable Single \n Expand'
                : 'Enable Multiple \n Expand'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Royal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});

const CONTENT = [
  {
    key: 0,
    isExpanded: false,
    category_name: 'Ceiling Fans',
    subcategory: [
      { id: 1, val: 'Deluxe 36"', mrp: 6650, description: 'Royal Deluxe 36" Copper wire' },
      { id: 2, val: 'Deluxe - Platinum - Opal 56"', mrp: 7850, description: 'Royal Deluxe / Platinum / Opal 56" Copper wire.\n> CCA wire - 7250' },
      { id: 3, val: 'Hi Standard', mrp: 7150, description: 'Royal Economy/Hi-Standard 56" Copper wire.\n> CCA wire - 6550' },
      { id: 4, val: 'Water Proof', mrp: 7900, description: 'Royal Water Proof Emperor 56" Copper wire\n> Majesty Water Proof 56" Copper Wire  MRP - 8000' },
      { id: 4, val: 'Passion 36"', mrp: 6850, description: 'Royal Passion 36" Copper wire' },
      { id: 5, val: 'Passion 56"', mrp: 8000, description: 'Royal Passion 56" Copper wire' },
      { id: 6, val: 'Regency', mrp: 8100, description: 'Royal Regency 56" Copper wire' },
      { id: 7, val: 'Regent / Regal', mrp: 8100, description: 'Royal Regent / Regal 56" Copper wire' },
      { id: 8, val: 'Jem - Trinity', mrp: 8200, description: 'Royal Jem 56" Copper wire' },
      { id: 9, val: 'Energy Saver 50w', mrp: 8200, description: 'Royal Energy Saver 50 watt 56" Copper wire' },
      { id: 10, val: 'Noble - Imperial 3B', mrp: 8350, description: 'Royal Noble / Imperial 3 Blade 56" Copper wire' },
      { id: 11, val: 'Imperial 4B', mrp: 8550, description: 'Royal Imperial 4 Blade 56" Copper wire' },
      { id: 12, val: 'Ornament 5B', mrp: 13000, description: 'Royal Ornament 5 Blade 56" Copper wire' },
      { id: 13, val: 'RL-040', mrp: 10000, description: 'Royal LifeStyle Series RL-040 Model 56" Copper wire' },
    ],
  },
  {
    key: 1,
    isExpanded: false,
    category_name: 'AC/DC Inverter Series',
    subcategory: [
      { id: 1, val: 'Expo Deluxe AC/DC', mrp: 7650, description: 'Royal Expo AC/DC 56" Copper wire.' },
      { id: 2, val: 'Opal AC/DC', mrp: 7750, description: 'Royal Opal AC/DC 56" Copper wire.' },
      { id: 3, val: 'Regency - Passion - Cresent AC/DC', mrp: 8300, description: 'Royal Passion/Regency/Cresent AC/DC 56" Copper wire.' },
      { id: 4, val: 'Imperial AC/DC', mrp: 8550, description: 'Royal Water Proof Emperor  AC/DC 56" Copper wire.' },
      { id: 4, val: 'RL-050 AC/DC RF kit', mrp: 10100, description: 'Royal LifeStyle Series RL-050 Model AC/DC RF kit 56" Copper wire.' },
      { id: 5, val: 'Ornament AC/DC RF kit', mrp: 13300, description: 'Royal Ornament AC/DC RF kit 56" Copper wire.' },
    ],
  },
  {
    key: 2,
    isExpanded: false,
    category_name: 'False Ceiling',
    subcategory: [
      { id: 1, val: 'False Ceiling 2 x 2', mrp: 9200, description: 'Royal False Ceiling 2 x 2  18" Copper wire' },
      { id: 2, val: 'False Ceiling 2 x 2 Light/Wooden', mrp: 9500, description: 'Royal False Ceiling 2 x 2 Light/Wooden 18" Copper wire' },
      { id: 3, val: 'Ceiling Exhaust 8" Grill', mrp: 3650, description: 'Royal Ceiling Exhaust 8" Grid Copper wire' },
      { id: 4, val: 'Ceiling Exhaust 10" Grill', mrp: 3800, description: 'Royal Ceiling Exhaust 10" Grid Copper wire' },
      { id: 5, val: 'Ceiling Exhaust 12" Grill', mrp: 4250, description: 'Royal Ceiling Exhaust 12" Grid Copper wire' },
      { id: 6, val: 'Ceiling Exhaust 8" Panel', mrp: 3700, description: 'Royal Ceiling Exhaust 8" Panel Copper wire' },
      { id: 7, val: 'Ceiling Exhaust 10" Panel', mrp: 3850, description: 'Royal Ceiling Exhaust 10" Panel Copper wire' },
    ],
  },
  {
    key: 3,
    isExpanded: false,
    category_name: 'Pedestal Fan',
    subcategory: [
      { id: 1, val: 'Pedestal 18" Black', mrp: 8700, description: 'Royal Pedestal 18" Copper wire' },
      { id: 2, val: 'Pedestal Deluxe 24" Blue/Black', mrp: 11700, description: 'Royal Pedestal Deluxe 24" Black/Blue Copper wire' },
      { id: 3, val: 'Pedestal Designer 24"', mrp: 12000, description: 'Royal Pedestal Designer (Cross Base) 24" Copper wire' },
      { id: 4, val: 'Pedestal Deluxe 24" AC/DC Remote', mrp: 13300, description: 'Royal Pedestal Deluxe AC/DC Remote Control 24" Copper wire' },
      { id: 5, val: 'Pedestal 24"', mrp: 20400, description: 'Royal Mist Fan (Mystic) 24" Copper wire' },
      { id: 6, val: 'Pedestal 30"', mrp: 16000, description: 'Royal Pedestal 30" Copper wire' },
    ],
  },
  {
    key: 4,
    isExpanded: false,
    category_name: 'Bracket Fan',
    subcategory: [
      { id: 1, val: 'Bracket 12"', mrp: 5550, description: 'Royal Bracket 12" Copper wire.' },
      { id: 2, val: 'Bracket 14"', mrp: 5750, description: 'Royal Bracket 14" Copper wire.' },
      { id: 3, val: 'Bracket 18"', mrp: 7100, description: 'Royal Bracket 18" Elegant Copper wire\n> CCA - 6300' },
      { id: 4, val: 'Bracket 18" Remote', mrp: 5550, description: 'Royal Bracket Remote Control 18" Copper wire.' },
      { id: 5, val: 'Bracket 24"', mrp: 9900, description: 'Royal Bracket 24" Copper wire.' },
    ],
  },
  {
    key: 5,
    isExpanded: false,
    category_name: 'Myga Bracket',
    subcategory: [
      { id: 1, val: 'Myga Bracket 18"', mrp: 8100, description: 'Royal Myga Bracket 18" Copper wire.' },
      { id: 1, val: 'Myga Bracket 20"', mrp: 10400, description: 'Royal Myga Bracket 20" Copper wire.' },
      { id: 1, val: 'Myga Bracket 24"', mrp: 10500, description: 'Royal Myga Bracket 24" Copper wire.' },
      { id: 1, val: 'Myga Bracket 24" Panel', mrp: 10800, description: 'Royal Myga Bracket 24" with Panel Copper wire.' },
    ],
  },
  {
    key: 6,
    isExpanded: false,
    category_name: 'Louver Fan',
    subcategory: [
      { id: 1, val: 'Louver Bracket 14"', mrp: 6300, description: 'Royal Louver Bracket 14" Copper wire\n> CCA - 5800' },
      { id: 2, val: 'Louver Bracket 14" Color', mrp: 6400, description: 'Royal Louver Bracket 14" Color Model Copper wire' },
      { id: 3, val: 'Louver Bracket 14" Remote', mrp: 6800, description: 'Royal Louver Bracket 14" Remote Control Copper wire' },
      { id: 4, val: 'Louver Bracket 14" Color with Remote', mrp: 6900, description: 'Royal Louver Bracket 14" Remote Control Copper wire' },
      { id: 5, val: 'Louver Pedestal 14"', mrp: 7400, description: 'Royal Louver Pedestal 14" Copper wire\n> CCA - 6900' },
      { id: 6, val: 'Louver Pedestal 14" Color', mrp: 7600, description: 'Royal Louver Pedestal 14" Color Model Copper wire' },
      { id: 7, val: 'Louver Pedestal 14" Remote', mrp: 7900, description: 'Royal Louver Pedestal 14" Remote Control Copper wire' },
      { id: 8, val: 'Louver Pedestal 14" Color with Remote', mrp: 8100, description: 'Royal Louver Pedestal 14" Remote Control Copper wire' },
    ],
  },
  {
    key: 7,
    isExpanded: false,
    category_name: 'Exhaust Fan Metal',
    subcategory: [
      { id: 1, val: 'Exhaust Metal 8"', mrp: 4000, description: 'Royal Exhaust Metal 8" Copper wire' },
      { id: 2, val: 'Exhaust Metal 10"', mrp: 4350, description: 'Royal Exhaust Metal 10" Copper wire' },
      { id: 3, val: 'Exhaust Metal 12" Simple/Grill', mrp: 5000, description: 'Royal Exhaust Metal 12" Simple/Grill Copper wire' },
      { id: 4, val: 'Exhaust Metal 16" 4B', mrp: 7850, description: 'Royal Exhaust Metal 16" Copper wire' },
      { id: 5, val: 'Exhaust Metal 18" 4B', mrp: 8300, description: 'Royal Exhaust Metal 18" Copper wire' },
      { id: 6, val: 'Exhaust Metal 24" 6B', mrp: 10250, description: 'Royal Exhaust Metal 24" Copper wire' },
    ],
  },
  {
    key: 8,
    isExpanded: false,
    category_name: 'Exhaust Fan Plastic',
    subcategory: [
      { id: 1, val: 'Window Exhaust 6"', mrp: 2350, description: 'Royal Exhaust Window 6" Copper wire' },
      { id: 2, val: 'Window Exhaust 8"', mrp: 2850, description: 'Royal Exhaust Window 8" Copper wire' },
      { id: 3, val: 'Exhaust Plastic 6"', mrp: 3500, description: 'Royal Exhaust Plastic 6" Copper wire' },
      { id: 4, val: 'Exhaust Plastic 8"', mrp: 4150, description: 'Royal Exhaust Plastic 8" Copper wire\n> CCA - 3850' },
      { id: 5, val: 'Exhaust Plastic 10"', mrp: 4250, description: 'Royal Exhaust Plastic 10" Copper wire\n> CCA - 3950' },
      { id: 6, val: 'Exhaust Plastic 12"', mrp: 4700, description: 'Royal Exhaust Plastic 12" Copper wire\n> CCA - 4300' },
    ],
  },
  {
    key: 9,
    isExpanded: false,
    category_name: 'TCP & Table Fan',
    subcategory: [
      { id: 1, val: 'Glamour TCP 18"', mrp: 8100, description: 'Royal Glamour TCP 18" Copper wire' },
      { id: 2, val: 'Unique Pesdestal 18"', mrp: 8550, description: 'Royal Unique Pedestal 18" Copper wire' },
      { id: 3, val: 'Unique Pesdestal Remote 18"', mrp: 9250, description: 'Royal Unique Pedestal 18" Remote Copper wire' },
      { id: 4, val: 'Taable 12"', mrp: 5550, description: 'Royal Table 12" Copper wire' },
      { id: 4, val: 'Taable 14"', mrp: 5750, description: 'Royal Table 14" Copper wire' },
    ],
  },
  {
    key: 10,
    isExpanded: false,
    category_name: 'Circomatic Fan',
    subcategory: [
      { id: 1, val: 'Circo 18" Simple/Fix', mrp: 7000, description: 'Royal Circo 18" Simple/Fix Model Copper wire\n> CCA - 6200' },
      { id: 2, val: 'Circo Fix 24"', mrp: 9750, description: 'Royal Circo 24" Fix Copper wire' },
    ],
  },
  {
    key: 11,
    isExpanded: false,
    category_name: 'Item 12',
    subcategory: [{ id: 31, val: 'Sub Cat 31' }],
  },
  {
    key: 12,
    isExpanded: false,
    category_name: 'Item 13',
    subcategory: [{ id: 32, val: 'Sub Cat 32' }],
  },
];