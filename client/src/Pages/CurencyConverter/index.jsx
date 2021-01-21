import React, { useEffect, useState } from 'react';
import Aux from '../../HOC/aux'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '../../components/Button';
import Axios from '../../utils/index';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'GBP',
    label: '£',
  },
  {
    value: 'INR',
    label: '₹',
  },
  {
    value: 'AUD',
    label: 'A$',
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '24px auto',
    width: '80%',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  arrow: {
    fontSize: '64px',
    marginTop: '12px'
  }
}));

export default (props) => {
  const classes = useStyles();
  const [value, setValues] = useState({ curency: '', });
  const [value2, setValues2] = useState({ curency: '', });
  const [amount, setAmount] = useState('');
  const [converstion, setConversion] = useState('');
  const [id, setId] = useState(null);
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const querySearch = new URLSearchParams(props.location.search);
    const params = {};

    let amount = null;
    let calculated = null;
    let id = null;

    for (let param of querySearch.entries()) {
      if (param[0] === 'amount') {
        amount = param[1];
      } if (param[0] === 'calculated') {
        calculated = +param[1];
      }
      if (param[0] === 'id') {
        id = param[1];
      } else {
        params[param[0]] = param[1];
      }
    }

    if (amount) {
      setAmount(amount);
      setValues({ curency: params.from })
      setValues2({ curency: params.to })
      setId(id);
      setRate(params.rate);
      setConversion(<h2>{value2.curency + calculated.toFixed(2)}</h2>);
    }
    // eslint-disable-next-line
  }, [props.location.search]);

  const handleChange = (name) => (event) => {
    setValues({
      [name] : event.target.value
    })
  }

  const handleChange2 = (name) => (event) => {
    setValues2({
      [name] : event.target.value
    })
  }

  const handleAmountInput = (e) => {
    const check = /^[0-9.\b]+$/;

    if (e.target.value === '' || check.test(e.target.value)) {
      setAmount(e.target.value);
    }

  }

  const handleClick = (e) => {
    console.log(value, value2, amount)
    const amountArr = amount.split('.');
    if (amountArr.length <= 2 ) {
      if (+amountArr[1] > 99 || value.curency === '' || value2.curency === '') {
        setConversion(<h2 style={{color: 'red'}}>Invalid Input!!</h2>);
      } else {
        if (!id) {
          Axios.submitConversion({
            from: value.curency, to: value2.curency, amount: amount
          }).then(res =>
            setConversion(
              <h2>{value2.curency + res.data.calculated_amount.toFixed(2)}</h2>
            ))
          .catch(err =>
              setConversion(
                <h2 style={{ color: 'red' }}>An error occured!</h2>
          ));
        } else {
          Axios.updateRow({
            id: id,
            from: value.curency,
            to: value2.curency,
            conversion_rate: rate,
            quantity: amount,
            calculated_amount: amount * rate
          }).then(res =>
            setConversion(
              <h2>{res.data.calculated_amount.toFixed(2)}</h2>)
          );
        }
      }
    } else {
      setConversion(<h2 style={{color: 'red'}}>Invalid Input!!</h2>);
    }
  }

  const handleReset = () => {
    setValues({
      curency: '',
    });
    setValues2({
      curency: '',
    });
    setAmount('');
    setConversion('');

  }

  return (
    <Aux>
      <header className="App-header">
        <h2>
          Curency Converter
        </h2>
      </header>
      <div className={classes.container}>
        <TextField
          id="outlined-name"
          label="amount"
          className={classes.textField}
          value={amount}
          onChange={handleAmountInput}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={value.curency}
          onChange={handleChange('curency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <ArrowRightAltIcon className={classes.arrow} />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={value2.curency}
          onChange={handleChange2('curency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
      <Button color='blue' onClick={handleClick} >Convert!</Button>
      <Button color='red' onClick={handleReset} >Reset!</Button>
      {converstion}
    </Aux>
  )
}
