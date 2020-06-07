import React, { useState } from "react";
import TabsRoutes from "../../routes/tabs";
import { TouchableOpacity } from "react-native";
import { Container, Header, Search, Tabs, SearchInput } from "./styles";
import { AntDesign } from "@expo/vector-icons";
const Main = () => {
  const [input, setInput] = useState();

  return (
    <Container>
      <Header>
        <Search>
          <AntDesign name="search1" size={24} color="red" />
          <SearchInput
            value={input}
            onChangeText={setInput}
            placeholder="Pesquise"
          />
          <TouchableOpacity onPress={() => setInput("")}>
            <AntDesign name="closecircle" size={15} color="gray" />
          </TouchableOpacity>
        </Search>
      </Header>
      <Tabs>
        <TabsRoutes />
      </Tabs>
    </Container>
  );
};

export default Main;
