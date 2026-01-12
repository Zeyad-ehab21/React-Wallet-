import { View, Text } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";

const BalanceCard = ({ summary }) => {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>
        ${parseFloat(summary.balance).toFixed(2)}
      </Text>
      <View style={styles.balanceStats}>
<View style={styles.balanceStatItem}>
    <Text style={styles.statLabel}>Income</Text>
    <Text style={[styles.statValue, { color: COLORS.income }]}>
      +${parseFloat(summary.income).toFixed(2)}
      </Text>

</View>
<View style={[styles.balanceStatItem, styles.statDivider]}></View>
<View style={styles.balanceStatItem}>
    <Text style={styles.statLabel}>Expenses</Text>
    <Text style={[styles.statValue, { color: COLORS.expense }]}>
      -${Math.abs(parseFloat(summary.expenses)).toFixed(2)}
      </Text>
</View>
</View>
      
    </View>
  );
};

export default BalanceCard;
