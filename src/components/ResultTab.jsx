import ResultRow from "./ResultRow";

export default function ResultTab() {
  return (
    <div>
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          <ResultRow />
        </tbody>
      </table>
    </div>
  );
}
