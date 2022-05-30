// React
import { SafeAreaView } from 'react-native';
// Components
import CountryInputField from '../../Global/CountryInputField';
import AmountInputField from '../../Global/AmountInputField';
// util
import tw from 'twrnc';

const ToContainer = ({
	toCountry,
	setToCountry,
	toCountryFlag,
	onChangetoCountryFlag,
	toAmount,
	onChangetoAmount,
	toCurrency,
	onChangetoCurrency,
}) => {
	return (
		<SafeAreaView style={tw.style('justify-center', 'w-full', 'my-4')}>
			<CountryInputField country={toCountry} setCountry={setToCountry} />
			<AmountInputField
				countryFlag={toCountryFlag}
				onChangeCountryFlag={onChangetoCountryFlag}
				amount={toAmount}
				onChangeAmount={onChangetoAmount}
				currency={toCurrency}
				onChangeCurrency={onChangetoCurrency}
				ieFlag='🇰🇷'
				ieCurrency='KRW'
			/>
		</SafeAreaView>
	);
};

export default ToContainer;