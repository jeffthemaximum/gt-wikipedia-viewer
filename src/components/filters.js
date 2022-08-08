import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { getFormattedYesterday } from '../services/dateHelpers'
import DateSelector from './common/dateSelector'
import SelectInput from './common/selectInput'

const countrySelectOptions = [
  { value: 'AF', displayName: 'Afghanistan' },
  { value: 'AX', displayName: 'Aland Islands' },
  { value: 'AL', displayName: 'Albania' },
  { value: 'DZ', displayName: 'Algeria' },
  { value: 'AS', displayName: 'American Samoa' },
  { value: 'AD', displayName: 'Andorra' },
  { value: 'AO', displayName: 'Angola' },
  { value: 'AI', displayName: 'Anguilla' },
  { value: 'AQ', displayName: 'Antarctica' },
  { value: 'AG', displayName: 'Antigua and Barbuda' },
  { value: 'AR', displayName: 'Argentina' },
  { value: 'AM', displayName: 'Armenia' },
  { value: 'AW', displayName: 'Aruba' },
  { value: 'AU', displayName: 'Australia' },
  { value: 'AT', displayName: 'Austria' },
  { value: 'AZ', displayName: 'Azerbaijan' },
  { value: 'BS', displayName: 'Bahamas' },
  { value: 'BH', displayName: 'Bahrain' },
  { value: 'BD', displayName: 'Bangladesh' },
  { value: 'BB', displayName: 'Barbados' },
  { value: 'BY', displayName: 'Belarus' },
  { value: 'BE', displayName: 'Belgium' },
  { value: 'BZ', displayName: 'Belize' },
  { value: 'BJ', displayName: 'Benin' },
  { value: 'BM', displayName: 'Bermuda' },
  { value: 'BT', displayName: 'Bhutan' },
  { value: 'BO', displayName: 'Bolivia' },
  { value: 'BQ', displayName: 'Bonaire, Sint Eustatius and Saba' },
  { value: 'BA', displayName: 'Bosnia and Herzegovina' },
  { value: 'BW', displayName: 'Botswana' },
  { value: 'BV', displayName: 'Bouvet Island' },
  { value: 'BR', displayName: 'Brazil' },
  { value: 'IO', displayName: 'British Indian Ocean Territory' },
  { value: 'BN', displayName: 'Brunei Darussalam' },
  { value: 'BG', displayName: 'Bulgaria' },
  { value: 'BF', displayName: 'Burkina Faso' },
  { value: 'BI', displayName: 'Burundi' },
  { value: 'KH', displayName: 'Cambodia' },
  { value: 'CM', displayName: 'Cameroon' },
  { value: 'CA', displayName: 'Canada' },
  { value: 'CV', displayName: 'Cape Verde' },
  { value: 'KY', displayName: 'Cayman Islands' },
  { value: 'CF', displayName: 'Central African Republic' },
  { value: 'TD', displayName: 'Chad' },
  { value: 'CL', displayName: 'Chile' },
  { value: 'CN', displayName: 'China' },
  { value: 'CX', displayName: 'Christmas Island' },
  { value: 'CC', displayName: 'Cocos (Keeling) Islands' },
  { value: 'CO', displayName: 'Colombia' },
  { value: 'KM', displayName: 'Comoros' },
  { value: 'CG', displayName: 'Congo' },
  { value: 'CD', displayName: 'Congo, Democratic Republic of the Congo' },
  { value: 'CK', displayName: 'Cook Islands' },
  { value: 'CR', displayName: 'Costa Rica' },
  { value: 'CI', displayName: "Cote D'Ivoire" },
  { value: 'HR', displayName: 'Croatia' },
  { value: 'CU', displayName: 'Cuba' },
  { value: 'CW', displayName: 'Curacao' },
  { value: 'CY', displayName: 'Cyprus' },
  { value: 'CZ', displayName: 'Czech Republic' },
  { value: 'DK', displayName: 'Denmark' },
  { value: 'DJ', displayName: 'Djibouti' },
  { value: 'DM', displayName: 'Dominica' },
  { value: 'DO', displayName: 'Dominican Republic' },
  { value: 'EC', displayName: 'Ecuador' },
  { value: 'EG', displayName: 'Egypt' },
  { value: 'SV', displayName: 'El Salvador' },
  { value: 'GQ', displayName: 'Equatorial Guinea' },
  { value: 'ER', displayName: 'Eritrea' },
  { value: 'EE', displayName: 'Estonia' },
  { value: 'ET', displayName: 'Ethiopia' },
  { value: 'FK', displayName: 'Falkland Islands (Malvinas)' },
  { value: 'FO', displayName: 'Faroe Islands' },
  { value: 'FJ', displayName: 'Fiji' },
  { value: 'FI', displayName: 'Finland' },
  { value: 'FR', displayName: 'France' },
  { value: 'GF', displayName: 'French Guiana' },
  { value: 'PF', displayName: 'French Polynesia' },
  { value: 'TF', displayName: 'French Southern Territories' },
  { value: 'GA', displayName: 'Gabon' },
  { value: 'GM', displayName: 'Gambia' },
  { value: 'GE', displayName: 'Georgia' },
  { value: 'DE', displayName: 'Germany' },
  { value: 'GH', displayName: 'Ghana' },
  { value: 'GI', displayName: 'Gibraltar' },
  { value: 'GR', displayName: 'Greece' },
  { value: 'GL', displayName: 'Greenland' },
  { value: 'GD', displayName: 'Grenada' },
  { value: 'GP', displayName: 'Guadeloupe' },
  { value: 'GU', displayName: 'Guam' },
  { value: 'GT', displayName: 'Guatemala' },
  { value: 'GG', displayName: 'Guernsey' },
  { value: 'GN', displayName: 'Guinea' },
  { value: 'GW', displayName: 'Guinea-Bissau' },
  { value: 'GY', displayName: 'Guyana' },
  { value: 'HT', displayName: 'Haiti' },
  { value: 'HM', displayName: 'Heard Island and Mcdonald Islands' },
  { value: 'VA', displayName: 'Holy See (Vatican City State)' },
  { value: 'HN', displayName: 'Honduras' },
  { value: 'HK', displayName: 'Hong Kong' },
  { value: 'HU', displayName: 'Hungary' },
  { value: 'IS', displayName: 'Iceland' },
  { value: 'IN', displayName: 'India' },
  { value: 'ID', displayName: 'Indonesia' },
  { value: 'IR', displayName: 'Iran, Islamic Republic of' },
  { value: 'IQ', displayName: 'Iraq' },
  { value: 'IE', displayName: 'Ireland' },
  { value: 'IM', displayName: 'Isle of Man' },
  { value: 'IL', displayName: 'Israel' },
  { value: 'IT', displayName: 'Italy' },
  { value: 'JM', displayName: 'Jamaica' },
  { value: 'JP', displayName: 'Japan' },
  { value: 'JE', displayName: 'Jersey' },
  { value: 'JO', displayName: 'Jordan' },
  { value: 'KZ', displayName: 'Kazakhstan' },
  { value: 'KE', displayName: 'Kenya' },
  { value: 'KI', displayName: 'Kiribati' },
  { value: 'KP', displayName: "Korea, Democratic People's Republic of" },
  { value: 'KR', displayName: 'Korea, Republic of' },
  { value: 'XK', displayName: 'Kosovo' },
  { value: 'KW', displayName: 'Kuwait' },
  { value: 'KG', displayName: 'Kyrgyzstan' },
  { value: 'LA', displayName: "Lao People's Democratic Republic" },
  { value: 'LV', displayName: 'Latvia' },
  { value: 'LB', displayName: 'Lebanon' },
  { value: 'LS', displayName: 'Lesotho' },
  { value: 'LR', displayName: 'Liberia' },
  { value: 'LY', displayName: 'Libyan Arab Jamahiriya' },
  { value: 'LI', displayName: 'Liechtenstein' },
  { value: 'LT', displayName: 'Lithuania' },
  { value: 'LU', displayName: 'Luxembourg' },
  { value: 'MO', displayName: 'Macao' },
  { value: 'MK', displayName: 'Macedonia, the Former Yugoslav Republic of' },
  { value: 'MG', displayName: 'Madagascar' },
  { value: 'MW', displayName: 'Malawi' },
  { value: 'MY', displayName: 'Malaysia' },
  { value: 'MV', displayName: 'Maldives' },
  { value: 'ML', displayName: 'Mali' },
  { value: 'MT', displayName: 'Malta' },
  { value: 'MH', displayName: 'Marshall Islands' },
  { value: 'MQ', displayName: 'Martinique' },
  { value: 'MR', displayName: 'Mauritania' },
  { value: 'MU', displayName: 'Mauritius' },
  { value: 'YT', displayName: 'Mayotte' },
  { value: 'MX', displayName: 'Mexico' },
  { value: 'FM', displayName: 'Micronesia, Federated States of' },
  { value: 'MD', displayName: 'Moldova, Republic of' },
  { value: 'MC', displayName: 'Monaco' },
  { value: 'MN', displayName: 'Mongolia' },
  { value: 'ME', displayName: 'Montenegro' },
  { value: 'MS', displayName: 'Montserrat' },
  { value: 'MA', displayName: 'Morocco' },
  { value: 'MZ', displayName: 'Mozambique' },
  { value: 'MM', displayName: 'Myanmar' },
  { value: 'NA', displayName: 'Namibia' },
  { value: 'NR', displayName: 'Nauru' },
  { value: 'NP', displayName: 'Nepal' },
  { value: 'NL', displayName: 'Netherlands' },
  { value: 'AN', displayName: 'Netherlands Antilles' },
  { value: 'NC', displayName: 'New Caledonia' },
  { value: 'NZ', displayName: 'New Zealand' },
  { value: 'NI', displayName: 'Nicaragua' },
  { value: 'NE', displayName: 'Niger' },
  { value: 'NG', displayName: 'Nigeria' },
  { value: 'NU', displayName: 'Niue' },
  { value: 'NF', displayName: 'Norfolk Island' },
  { value: 'MP', displayName: 'Northern Mariana Islands' },
  { value: 'NO', displayName: 'Norway' },
  { value: 'OM', displayName: 'Oman' },
  { value: 'PK', displayName: 'Pakistan' },
  { value: 'PW', displayName: 'Palau' },
  { value: 'PS', displayName: 'Palestinian Territory, Occupied' },
  { value: 'PA', displayName: 'Panama' },
  { value: 'PG', displayName: 'Papua New Guinea' },
  { value: 'PY', displayName: 'Paraguay' },
  { value: 'PE', displayName: 'Peru' },
  { value: 'PH', displayName: 'Philippines' },
  { value: 'PN', displayName: 'Pitcairn' },
  { value: 'PL', displayName: 'Poland' },
  { value: 'PT', displayName: 'Portugal' },
  { value: 'PR', displayName: 'Puerto Rico' },
  { value: 'QA', displayName: 'Qatar' },
  { value: 'RE', displayName: 'Reunion' },
  { value: 'RO', displayName: 'Romania' },
  { value: 'RU', displayName: 'Russian Federation' },
  { value: 'RW', displayName: 'Rwanda' },
  { value: 'BL', displayName: 'Saint Barthelemy' },
  { value: 'SH', displayName: 'Saint Helena' },
  { value: 'KN', displayName: 'Saint Kitts and Nevis' },
  { value: 'LC', displayName: 'Saint Lucia' },
  { value: 'MF', displayName: 'Saint Martin' },
  { value: 'PM', displayName: 'Saint Pierre and Miquelon' },
  { value: 'VC', displayName: 'Saint Vincent and the Grenadines' },
  { value: 'WS', displayName: 'Samoa' },
  { value: 'SM', displayName: 'San Marino' },
  { value: 'ST', displayName: 'Sao Tome and Principe' },
  { value: 'SA', displayName: 'Saudi Arabia' },
  { value: 'SN', displayName: 'Senegal' },
  { value: 'RS', displayName: 'Serbia' },
  { value: 'CS', displayName: 'Serbia and Montenegro' },
  { value: 'SC', displayName: 'Seychelles' },
  { value: 'SL', displayName: 'Sierra Leone' },
  { value: 'SG', displayName: 'Singapore' },
  { value: 'SX', displayName: 'Sint Maarten' },
  { value: 'SK', displayName: 'Slovakia' },
  { value: 'SI', displayName: 'Slovenia' },
  { value: 'SB', displayName: 'Solomon Islands' },
  { value: 'SO', displayName: 'Somalia' },
  { value: 'ZA', displayName: 'South Africa' },
  { value: 'GS', displayName: 'South Georgia and the South Sandwich Islands' },
  { value: 'SS', displayName: 'South Sudan' },
  { value: 'ES', displayName: 'Spain' },
  { value: 'LK', displayName: 'Sri Lanka' },
  { value: 'SD', displayName: 'Sudan' },
  { value: 'SR', displayName: 'Suriname' },
  { value: 'SJ', displayName: 'Svalbard and Jan Mayen' },
  { value: 'SZ', displayName: 'Swaziland' },
  { value: 'SE', displayName: 'Sweden' },
  { value: 'CH', displayName: 'Switzerland' },
  { value: 'SY', displayName: 'Syrian Arab Republic' },
  { value: 'TW', displayName: 'Taiwan, Province of China' },
  { value: 'TJ', displayName: 'Tajikistan' },
  { value: 'TZ', displayName: 'Tanzania, United Republic of' },
  { value: 'TH', displayName: 'Thailand' },
  { value: 'TL', displayName: 'Timor-Leste' },
  { value: 'TG', displayName: 'Togo' },
  { value: 'TK', displayName: 'Tokelau' },
  { value: 'TO', displayName: 'Tonga' },
  { value: 'TT', displayName: 'Trinidad and Tobago' },
  { value: 'TN', displayName: 'Tunisia' },
  { value: 'TR', displayName: 'Turkey' },
  { value: 'TM', displayName: 'Turkmenistan' },
  { value: 'TC', displayName: 'Turks and Caicos Islands' },
  { value: 'TV', displayName: 'Tuvalu' },
  { value: 'UG', displayName: 'Uganda' },
  { value: 'UA', displayName: 'Ukraine' },
  { value: 'AE', displayName: 'United Arab Emirates' },
  { value: 'GB', displayName: 'United Kingdom' },
  { value: 'US', displayName: 'United States' },
  { value: 'UM', displayName: 'United States Minor Outlying Islands' },
  { value: 'UY', displayName: 'Uruguay' },
  { value: 'UZ', displayName: 'Uzbekistan' },
  { value: 'VU', displayName: 'Vanuatu' },
  { value: 'VE', displayName: 'Venezuela' },
  { value: 'VN', displayName: 'Viet Nam' },
  { value: 'VG', displayName: 'Virgin Islands, British' },
  { value: 'VI', displayName: 'Virgin Islands, U.s.' },
  { value: 'WF', displayName: 'Wallis and Futuna' },
  { value: 'EH', displayName: 'Western Sahara' },
  { value: 'YE', displayName: 'Yemen' },
  { value: 'ZM', displayName: 'Zambia' },
  { value: 'ZW', displayName: 'Zimbabwe' }
]

const limitSelectOptions = [
  { value: 25, displayName: 25 },
  { value: 50, displayName: 50 },
  { value: 75, displayName: 75 },
  { value: 100, displayName: 100 },
  { value: 200, displayName: 200 }
]

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 768px;
`

const getAllSearchParams = searchParams => {
  const allSearchParams = {}
  for (const [key, value] of searchParams.entries()) {
    allSearchParams[key] = value
  }

  return allSearchParams
}

const Container = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const formattedYesterday = getFormattedYesterday()

  const country = searchParams.get('country')
  const date = searchParams.get('date')
  const limit = searchParams.get('limit')

  useEffect(() => {
    if (!date) {
      setSearchParams({ ...getAllSearchParams(searchParams), date: formattedYesterday })
    }
  }, [
    date,
    formattedYesterday,
    searchParams,
    setSearchParams
  ])

  useEffect(() => {
    if (!limit) {
      setSearchParams({ ...getAllSearchParams(searchParams), limit: 100 })
    }
  }, [
    limit,
    searchParams,
    setSearchParams
  ])

  const handleCountryChange = event => {
    const newCountry = event.target.value
    if (newCountry === 'false') {
      searchParams.delete('country')
      setSearchParams({ ...getAllSearchParams(searchParams) })
    } else {
      setSearchParams({ ...getAllSearchParams(searchParams), country: event.target.value })
    }
  }

  const handleDateChange = event => {
    const newDate = event.target.value
    setSearchParams({ ...getAllSearchParams(searchParams), date: newDate })
  }

  const handleLimitChange = event => {
    setSearchParams({ ...getAllSearchParams(searchParams), limit: event.target.value })
  }

  return (
    <Component
      country={country}
      date={date}
      handleCountryChange={handleCountryChange}
      handleDateChange={handleDateChange}
      handleLimitChange={handleLimitChange}
      limit={limit}
      max={formattedYesterday}
    />
  )
}

const Component = ({ country, date, handleCountryChange, handleDateChange, handleLimitChange, limit, max }) => (
  <StyledContainer>
    {date && <DateSelector date={date} max={max} onChange={handleDateChange} />}
    <SelectInput firstBlank='All Countries' onChange={handleCountryChange} options={countrySelectOptions} value={country} />
    {limit && <SelectInput onChange={handleLimitChange} options={limitSelectOptions} value={limit} />}
  </StyledContainer>
)

export default Container
