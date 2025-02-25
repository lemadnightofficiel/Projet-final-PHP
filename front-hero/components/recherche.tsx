import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="search"
        size={18}
        color="#555"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder=" Recherche"
        placeholderTextColor="#555"
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 30,
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "black",
    fontStyle: "italic",
  },
  searchIcon: {
    marginLeft: 5,
  },
});

export default SearchBar;
