import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../stores/action';

export const home = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

console.log(items);
  const filteredData = items?.categories?.filter(item =>
    item.strCategory.toLowerCase().includes(searchText.toLowerCase()),
  );

  const onChange = textValue => {
    setSearchText(textValue);
  };

  const handleToggleItem = itemId => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(item => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
  
  const renderItem = ({item}) => {
    return (
      <View
        style={styles.renderItemMainContainer}>
        <View style={styles.renderItemFirstSubContainer}>
          <CheckBox
          
            style={styles.checkBox}
            value={selectedItems.includes(item.idCategory)}
            onValueChange={() => handleToggleItem(item.idCategory)}
            tintColor='black'
          />
          <Image
            source={{uri: item.strCategoryThumb}}
            resizeMode="contain"
            style={styles.image}
          />
          <Text
            style={[styles.heading,styles.text]}>
            {item.strCategory}
          </Text>
        </View>
        <View style={styles.renderItemSecondSubContainer}>
          <Text style={styles.text} numberOfLines={4}>{item.strCategoryDescription}</Text>
        </View>
      </View>
    );
  };

  const renderSearchbar = () => {
    return (
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#ffff"
          onSubmitEditing={event => searchMovie(event.nativeEvent.text)}
          style={styles.inputField}
          value={searchText}
          onChangeText={onChange}
        />
      </View>
    );
  };

  const renderDisplayData = () => {
    return (
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderSearchbar()}
      {error?<Text style={styles.text}>{error}</Text>:null}
      {loading ?<Text style={styles.text}>Loading............!!</Text> :renderDisplayData()}
    </View>
  );
};

export default home;


