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
    data: [ 
      {"name": 'Pizza', "MRP": 30, "purchase": 22},
      {"name": 'Burger', "MRP": 20, "purchase": 12},
      {"name": 'Risotto', "MRP": 50, "purchase": 33}
    ],
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
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{item.MRP}</Text>
          <Text style={styles.title}>{item.purchase}</Text>
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
