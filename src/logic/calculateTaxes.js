const calculateTaxes = function(calculationInput){
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let calcArray = [];
      const averageSalary = 5259;
      const firstBracketLimitPersonal = 12000;
      const firstBracketLimit = calculationInput.familySplitTaxes
        ? firstBracketLimitPersonal * 2
        : firstBracketLimitPersonal;
      const pensionTaxRate = 0.0976;
      const pensionTaxLimit = averageSalary * 30 * pensionTaxRate;
      let annualPensionTaxAmount = 0;
      for (let index = 0; index < 12; index++) {
        let currentIncome = calculationInput.detailedIncome[index];
        let currentPensionTaxAmount = 0;
        if (
          annualPensionTaxAmount + currentIncome * pensionTaxRate <
          pensionTaxLimit
        ) {
          currentPensionTaxAmount = currentIncome * pensionTaxRate;
        } else {
          currentPensionTaxAmount = Math.max(
            0,
            pensionTaxLimit - annualPensionTaxAmount
          );
        }
        annualPensionTaxAmount += currentPensionTaxAmount;
        // create results array
        calcArray.push({
          month: months[index],
          brutto: currentIncome,
          pensionTaxAmount: currentPensionTaxAmount.toFixed(2),
        });
      }
      return calcArray;
}
export default calculateTaxes;