import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native";

export default function TP2(props) {
  const navigation = props.navigation;

  return (
    <ScrollView>
        <View>
          {Array.from({ length: 16 }, (_, i) => (
            <Button
              key={i}
              title={`TP2 - ${i + 1}`}
              onPress={() => navigation.navigate(`TP2 - ${i + 1}`, { id: i + 1 })}
            />
          ))}
        </View>
    </ScrollView>
  );
}