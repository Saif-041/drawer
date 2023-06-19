import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    key: 0,
    title: 'Ceiling Fan',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    key: 1,
    title: 'Pesdestal',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    key: 2,
    title: 'Exhaust Plastic',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    key: 3,
    title: 'Louver',
    data: ['Cheese Cake', 'Ice Cream'],
  },
  {
    key: 4,
    title: 'Lifestyle Series',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    key: 5,
    title: 'Inverter / AC-DC',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    key: 6,
    title: 'Exhaust Metal',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    key: 7,
    title: 'Bracket',
    data: ['Cheese Cake', 'Ice Cream'],
  },
  {
    key: 8,
    title: 'False Ceiling',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#C7C7C7',
    padding: 2,
    marginVertical: 0,
  },
  header: {
    fontSize: 22,
  },
  title: {
    fontSize: 16,
  },
});
