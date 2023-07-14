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
    <View style={styles.mainHeader}>
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
              {/* {key < 9 ? '0'+ (key+1) : (key+1)}.  */}
              . {item.mrp} - {item.val}            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const GFC = () => {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#8f0c1f', paddingLeft: 5 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text style={styles.titleText}>Purchase Rate List</Text>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: '#f8da17',
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

export default GFC;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainHeader: {
    backgroundColor: '#F5FCFF',
    paddingLeft: 1,
    paddingRight: 1,
    margin: 1,
  },  
  header: {
    backgroundColor: '#d42e3b',
    padding: 20,
    margin: 1,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: 'red',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 18,
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
      { id: 1, val: 'Deluxe 36"', mrp: 6400, description: 'GFC Deluxe 36" Copper wire.' },
      { id: 2, val: 'Deluxe 56"', mrp: 7550, description: 'GFC Deluxe 56" Copper wire.\n> CCA wire - 7000' },
      { id: 3, val: 'Awami 56"', mrp: 6850, description: 'GFC Awami 56" Copper wire.\n> CCA wire - 6200' },
      { id: 4, val: 'Water Proof', mrp: 7810, description: 'GFC Water Proof 56" Copper wire.' },
      { id: 5, val: 'Karachi / Nabeel / Ravi 56"', mrp: 7650, description: 'GFC Karachi / Nabeel / Ravi  56" Copper wire' },
      { id: 6, val: 'Marvel 56"', mrp: 7830, description: 'GFC Marvel 56" Copper wire.\n> CCA wire - 7620' },
      { id: 7, val: 'Sapphire / Mansion', mrp: 8040, description: 'GFC Sapphire 56" Copper wire\n> CCA wire - 7830' },
      { id: 8, val: 'Crescent', mrp: 7920, description: 'GFC Crescent 56" Copper wire' },
      { id: 9, val: 'Perfect Plus', mrp: 8450, description: 'GFC Perfect Plus 56" Copper wire' },
      { id: 10, val: 'Karachi 50w', mrp: 7830, description: 'GFC Energy Saver Karachi Model 60 watt 56" Copper wire' },
      { id: 11, val: 'Brave', mrp: 11350, description: 'GFC Brave 56" Copper wire' },
      { id: 12, val: 'Future 5B', mrp: 12650, description: 'GFC Future 5 Blade 56" Copper wire' },
    ],
  },
  {
    key: 1,
    isExpanded: false,
    category_name: 'AC/DC Inverter Series',
    subcategory: [
      { id: 1, val: 'Marvel AC/DC', mrp: 8060, description: 'GFC Marvel AC/DC 56" Copper wire.' },
      { id: 2, val: 'Mansion AC/DC', mrp: 8150, description: 'GFC Mansion AC/DC 56" Copper wire.' },
    ],
  },
  {
    key: 2,
    isExpanded: false,
    category_name: 'False Ceiling',
    subcategory: [
      { id: 1, val: 'False Ceiling 2 x 2', mrp: 8520, description: 'GFC False Ceiling 2 x 2  16" Copper wire' },
      { id: 3, val: 'Ceiling Exhaust 8" Grill', mrp: 3500, description: 'GFC Ceiling Exhaust 8" Grid Copper wire' },
      { id: 4, val: 'Ceiling Exhaust 10" Grill', mrp: 3650, description: 'GFC Ceiling Exhaust 10" Grid Copper wire' },
      { id: 5, val: 'Ceiling Exhaust 12" Grill', mrp: 3820, description: 'GFC Ceiling Exhaust 12" Grid Copper wire' },
    ],
  },
  {
    key: 3,
    isExpanded: false,
    category_name: 'Pedestal Fan',
    subcategory: [
      { id: 1, val: 'Pedestal 24" CCA', mrp: 10450, description: 'GFC Pedestal 24" Blue China coppper wire' },
      { id: 2, val: 'Pedestal 24" Copper', mrp: 11350, description: 'GFC Pedestal 24" Blue Copper wire' },
      { id: 3, val: 'Pedestal 24" Myga', mrp: 11875, description: 'GFC Pedestal (Cross Base) 24" Copper wire' },
      { id: 4, val: 'Mist Fan 24"', mrp: 19800, description: 'GFC Mist Fan (Mystic) 24" Copper wire' },
    ],
  },
  {
    key: 4,
    isExpanded: false,
    category_name: 'Bracket Fan',
    subcategory: [
      { id: 1, val: 'Bracket 12"', mrp: 5270, description: 'GFC Bracket 12" Copper wire.' },
      { id: 2, val: 'Bracket 14"', mrp: 5440, description: 'GFC Bracket 14" Copper wire.' },
      { id: 3, val: 'Bracket 18"', mrp: 6800, description: 'GFC Bracket 18" Elegant Copper wire\n> CCA - 6100' },
      { id: 4, val: 'Bracket 18" Remote', mrp: 7400, description: 'GFC Bracket Remote Control 18" Copper wire.' },
    ],
  },
  {
    key: 5,
    isExpanded: false,
    category_name: 'Myga Bracket',
    subcategory: [
      { id: 1, val: 'Myga Bracket 18"', mrp: 8230, description: 'GFC Myga Bracket 18" Copper wire.' },
      { id: 2, val: 'Myga Bracket 24"', mrp: 10300, description: 'GFC Myga Bracket 24" Copper wire.\n> CCA - 9550' },
    ],
  },
  {
    key: 6,
    isExpanded: false,
    category_name: 'Louver Fan',
    subcategory: [
      { id: 1, val: 'Louver Bracket 14"', mrp: 6070, description: 'GFC Louver Bracket 14" Copper wire\n> CCA - 5550' },
      { id: 2, val: 'Louver Pedestal 14"', mrp: 7200, description: 'GFC Louver Pedestal 14" Copper wire\n> CCA - 6700' },
    ],
  },
  {
    key: 7,
    isExpanded: false,
    category_name: 'Exhaust Fan Metal',
    subcategory: [
      { id: 1, val: 'Exhaust Metal 6"', mrp: 3680, description: 'GFC Exhaust Metal 8" Copper wire.' },
      { id: 2, val: 'Exhaust Metal 8"', mrp: 3880, description: 'GFC Exhaust Metal 8" Copper wire.' },
      { id: 3, val: 'Exhaust Metal 10"', mrp: 4220, description: 'GFC Exhaust Metal 10" Copper wire.\n> CCA - 3930' },
      { id: 4, val: 'Exhaust Metal 12" Simple/Grill', mrp: 4820, description: 'GFC Exhaust Metal 12" Simple/Grill Copper wire.\n> CCA - 4330' },
      { id: 5, val: 'Exhaust Metal 14"', mrp: 5100, description: 'GFC Exhaust Metal 16" Copper wire.' },
      { id: 6, val: 'Exhaust Metal 16"', mrp: 7570, description: 'GFC Exhaust Metal 16" Copper wire.' },
      { id: 7, val: 'Exhaust Metal 18"', mrp: 7920, description: 'GFC Exhaust Metal 18" Copper wire.' },
      { id: 8, val: 'Exhaust Metal 20"', mrp: 8360, description: 'GFC Exhaust Metal 18" Copper wire.' },
      { id: 9, val: 'Exhaust Metal 24"', mrp: 9860, description: 'GFC Exhaust Metal 24" Copper wire.' },
    ],
  },
  {
    key: 8,
    isExpanded: false,
    category_name: 'Exhaust Fan Plastic',
    subcategory: [
      { id: 1, val: 'Window Exhaust 6"', mrp: 2100, description: 'GFC Exhaust Window 6" Copper wire' },
      { id: 2, val: 'Window Exhaust 8"', mrp: 2650, description: 'GFC Exhaust Window 8" Copper wire' },
      { id: 3, val: 'Exhaust Plastic 6"', mrp: 3650, description: 'GFC Exhaust Plastic 6" Copper wire' },
      { id: 4, val: 'Exhaust Plastic 8"', mrp: 4000, description: 'GFC Exhaust Plastic 8" Copper wire\n> CCA - 3700' },
      { id: 5, val: 'Exhaust Plastic 10"', mrp: 4100, description: 'GFC Exhaust Plastic 10" Copper wire\n> CCA - 3850' },
      { id: 6, val: 'Exhaust Plastic 12"', mrp: 4500, description: 'GFC Exhaust Plastic 12" Copper wire\n> CCA - 4150' },
    ],
  },
  {
    key: 9,
    isExpanded: false,
    category_name: 'Floor Fan',
    subcategory: [
      { id: 1, val: 'Floor Fan 18"', mrp: 7950, description: 'GFC Floor Fan 18" Copper wire' },
    ],
  },
  {
    key: 10,
    isExpanded: false,
    category_name: 'Circomatic Fan',
    subcategory: [
      { id: 1, val: 'Circo 18"', mrp: 6770, description: 'GFC Circo 18" Copper wire.' },
    ],
  },
  {
    key: 11,
    isExpanded: false,
    category_name: 'Discount',
    subcategory: [
      { id: 1, mrp: '0', val: '0% Discounted', description: '' },
    ],
  },
];