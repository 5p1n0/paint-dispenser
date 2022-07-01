import axios from "axios"
const baseUrl = 'http://ccms.apps.nephila.tech/api/v1/formulas'

export const getAccordionData = async (queryParams) => {
  try {
    const response = await axios.get(`${baseUrl}/?${queryParams}`)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    }
    else if (error.request) console.log(error.request)
    else console.log('Error', error.message)
  }
}

export const getColors = async (productCode, colorCardCode, color) => {
  try {
    const response = await axios.get(`${baseUrl}/?product=${productCode}&color_card=${colorCardCode}&color=${color}`)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    }
    else if (error.request) console.log(error.request)
    else console.log('Error', error.message)
  }
}