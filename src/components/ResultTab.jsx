import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTab({ userInput }) {
  
  
  const data = calculateInvestmentResults(userInput);
  const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            const totalInterest = val.valueEndOfYear - val.annualInvestment * val.year - initialInvestment;
            const totalAmountInvested = val.valueEndOfYear - totalInterest;
            
            return (
              <tr>
                <td>{val.year}</td>
                <td>{formatter.format(val.valueEndOfYear)}</td>
                <td>{formatter.format(val.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
