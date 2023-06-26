// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState } from 'react';
// Import required components
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
            onPress={() => alert('Name: ' + item.val + '\nDescription: ' + item.description + '\nMRP: ' + item.mrp)}>
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

const App = () => {
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
                : 'Enalble Multiple \n Expand'}
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

export default App;
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

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    key: 0,
    isExpanded: false,
    category_name: 'Ceiling Fans',
    subcategory: [
      { id: 1, val: 'Deluxe 36"', mrp: 6650, description: 'Royal Deluxe 36" Copper wire' },
      { id: 2, val: 'Deluxe 56" - Platinum - Opal', mrp: 7850, description: 'Royal Deluxe 56" Copper wire.\n CCA wire - 7250' },
      { id: 3, val: 'Hi Standard', mrp: 7150, description: 'Royal Economy/Hi-Standard 56" Copper wire.\n CCA wire - 6550' },
      { id: 4, val: 'Water Proof', mrp: 7900, description: 'Royal Water Proof Emperor 56" Copper wire\n Majesty Water Proof 56" Copper Wire  MRP - 8000' },
      { id: 4, val: 'Passion 36"', mrp: 6850, description: 'Royal Passion 36" Copper wire' },
      { id: 5, val: 'Passion 56"', mrp: 8000, description: 'Royal Passion 56" Copper wire' },
      { id: 6, val: 'Regency', mrp: 8100, description: 'Royal Regency 56" Copper wire' },
      { id: 7, val: 'Regent / Regal', mrp: 8100, description: 'Royal Regent / Regal 56" Copper wire' },
      { id: 8, val: 'Jem - Trinity', mrp: 8200, description: 'Royal Jem 56" Copper wire' },
      { id: 9, val: 'Energy Saver 50w', mrp: 8200, description: 'Royal Energy Saver 50 watt 56" Copper wire' },
      { id: 10, val: 'Noble - Imperial 3B', mrp: 8350, description: 'Royal Noble / Imperial 3 Blade 56" Copper wire' },
      { id: 11, val: 'Imperial 4B', mrp: 8550, description: 'Royal Imperial 4 Blade 56" Copper wire' },
      { id: 12, val: 'Ornament 5B', mrp: 13000, description: 'Royal Deluxe 36" Copper wire' },
    ],
  },
  {
    key: 1,
    isExpanded: false,
    category_name: 'Item 2',
    subcategory: [
      { id: 4, val: 'Sub Cat 4' },
      { id: 5, val: 'Sub Cat 5' },
    ],
  },
  {
    key: 2,
    isExpanded: false,
    category_name: 'Item 3',
    subcategory: [
      { id: 7, val: 'Sub Cat 7' },
      { id: 9, val: 'Sub Cat 9' },
    ],
  },
  {
    key: 3,
    isExpanded: false,
    category_name: 'Item 4',
    subcategory: [
      { id: 10, val: 'Sub Cat 10' },
      { id: 12, val: 'Sub Cat 2' },
    ],
  },
  {
    key: 4,
    isExpanded: false,
    category_name: 'Item 5',
    subcategory: [
      { id: 13, val: 'Sub Cat 13' },
      { id: 15, val: 'Sub Cat 5' },
    ],
  },
  {
    key: 5,
    isExpanded: false,
    category_name: 'Item 6',
    subcategory: [
      { id: 17, val: 'Sub Cat 17' },
      { id: 18, val: 'Sub Cat 8' },
    ],
  },
  {
    key: 6,
    isExpanded: false,
    category_name: 'Item 7',
    subcategory: [{ id: 20, val: 'Sub Cat 20' }],
  },
  {
    key: 7,
    isExpanded: false,
    category_name: 'Item 8',
    subcategory: [{ id: 22, val: 'Sub Cat 22' }],
  },
  {
    key: 8,
    isExpanded: false,
    category_name: 'Item 9',
    subcategory: [
      { id: 26, val: 'Sub Cat 26' },
      { id: 27, val: 'Sub Cat 7' },
    ],
  },
  {
    key: 9,
    isExpanded: false,
    category_name: 'Item 10',
    subcategory: [
      { id: 28, val: 'Sub Cat 28' },
      { id: 30, val: 'Sub Cat 0' },
    ],
  },
  {
    key: 10,
    isExpanded: false,
    category_name: 'Item 11',
    subcategory: [{ id: 31, val: 'Sub Cat 31' }],
  },
  {
    key: 11,
    isExpanded: false,
    category_name: 'Item 12',
    subcategory: [{ id: 34, val: 'Sub Cat 34' }],
  },
  {
    key: 12,
    isExpanded: false,
    category_name: 'Item 13',
    subcategory: [
      { id: 38, val: 'Sub Cat 38' },
      { id: 39, val: 'Sub Cat 9' },
    ],
  },
  {
    key: 13,
    isExpanded: false,
    category_name: 'Item 14',
    subcategory: [
      { id: 40, val: 'Sub Cat 40' },
      { id: 42, val: 'Sub Cat 2' },
    ],
  },
  {
    key: 14,
    isExpanded: false,
    category_name: 'Item 15',
    subcategory: [
      { id: 43, val: 'Sub Cat 43' },
      { id: 44, val: 'Sub Cat 44' },
    ],
  },
];