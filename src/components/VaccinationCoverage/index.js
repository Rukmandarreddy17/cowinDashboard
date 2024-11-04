import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toFixed(1)}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccineCoverageContainer">
      <h1 className="vaccineCoveragebarHeading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={vaccinationCoverageDetails} margin={{top: 5}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{stroke: 'gray', strokeWidth: 0}}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="dose1" name="Dose 1" fill="#2d87bb" barSize="20%" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
