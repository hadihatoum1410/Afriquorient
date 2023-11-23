/*npm install axios*/
//App.js
import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, Button, TextInput } from 'react-native';
import axios from 'axios';
const API_URL =
'http://localhost/php_backend/';
connst App = () => {
const[data, setData]=
useState([]);
  const [newItem,setNewItem]=useState('');
useEffect(() => {fetchData();},[]);
const fetchData = async()=> {
try { const response = await axios.get(`${API_URL}read.php`);

setData(response.data);
}catch (error) {
console.error('Error fetching data:', error);
}
};
const handleAddItem =
async ()=>{try {
await.axios.post(`${API_URL}create.php`,{ item: newItem });
setNewItem('');
fetchData();
}catch (error) {
console.error('Error adding item:', error);
}
};
const renderItem=({item})=>(<View>{item}</Text>
<Button
title="Delete" onPress={()=>handleDeleteItem(item)} />
</View>
);

//
const handleDeleteItem =
async (item)=>{try {
await.axios.post(`${API_URL}delete.php`,{ item });
fetchData();
}catch (error) {
console.error('Error deleting item:', error);
}
};
return ( <View> <TextInput placeholder="New item"
value={newItem}
onChangeText={(text) => setNewItem(text)}/>
<Button title="Add" onPress={handleAddItem} />
<FlatList
data={data}
renderItem={renderItem}
keyExtractor={(item)=>item.toString()}/>
</View>
);
};
export default App;
