import React from 'react'
import Select from 'react-select'

// const customStyles = {
//   container: () => ({
//     border: '2px solid #FFFFFF',
//   }),

//   option: (provided, state) => ({
//     ...provided,
//     color: state.isFocused ? '#52555F' : '#C7CCDC',

//     paddingLeft: 20,
//   }),

//   control: () => ({
//     // border: '2px solid #F5F6FB',
//   }),

//   // dropdownIndicator: (provided, state) => ({
//   //   ...provided,
//   //   width: state.selectProps.width,
//   //   height: state.selectProps.height,
//   //   border: '22px solid #F5F6FB',
//   // }),

//   singleValue: provided => {
//     const color = '#52555F'
//     const transition = 'opacity 250ms'

//     return { ...provided, color, transition }
//   },

//   menu: (provided, state) => ({
//     ...provided,
//     width: state.selectProps.width,
//     height: state.selectProps.height,
//   }),

//   menuList: (provided, state) => ({
//     background: '#FFFFFF',

//     boxShadow: '0px 3px 4px rgba(170, 178, 197, 0.4)',
//   }),
// }

export const DropSelect = ({ onChange, options }) => {
  return <Select classNamePrefix="react-select" onChange={onChange} placeholder="Категорія товару" options={options} />
}
