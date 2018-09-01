import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import IntegrationReactSelect from '../../component/ReactSelect/index'
// import asyncValidate from './asyncValidate';
// import validate from './validate';
const styles = {
    button: {
        background: '#cd3442',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        transition: 'all .3s ease',
        '&:hover': {
            background: '#a63240'
        }
    },
    form: {
        width: '440px',
        margin: '0 auto'
    },
    input: {
        '&:after': {
            borderBottom: '1px solid #cd3442!important',
        },
        '&:hover':{
            '&:before': {
                borderBottom: ' 1px solid #cd3442!important',
            },
        },
    },
    color:{
        color:'#ff4054!important'
    }

};
const renderTextField = (
    {input, label, meta: {touched, error}, ...custom},
) => (
    <TextField
        style={{marginBottom: '20px'}}
        label={label}
        placeholder={label}
        // floatingLabelText={label}
        // errorText={touched && error}
        {...input}
        {...custom}
        fullWidth
    />
);
const renderSelectField = ({input}) => (
    <IntegrationReactSelect changed={input}/>
);
const MaterialUiForm = props => {
    const {handleSubmit, pristine, reset, submitting, classes} = props;
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div>
                <Field name="lastName"
                       InputProps={{className: classes.input}}
                       component={renderTextField} label="Фамилия"
                       helperText='Укажите точно как в паспорте'
                       InputLabelProps={{FormLabelClasses:{focused:classes.color}}}
                />
            </div>
            <div>
                <Field name="firstName"
                       InputProps={{className: classes.input}}
                       component={renderTextField} label="Имя"
                       helperText='Укажите точно как в паспорте'
                       InputLabelProps={{FormLabelClasses:{focused:classes.color}}}
                />
            </div>
            <div>
                <Field
                    name="patronymic"
                       InputProps={{className: classes.input}}
                       component={renderTextField} label="Отчество"
                       InputLabelProps={{FormLabelClasses:{focused:classes.color}}}
                       helperText='Укажите точно как в паспорте. Если отчество отсутствует - поставьте прочерк'/>
            </div>
            <div>
                <Field
                    name="email"
                    InputProps={{className: classes.input}}
                    InputLabelProps={{FormLabelClasses:{focused:classes.color}}}
                    component={renderTextField}
                    label="Электронная почта"/>
            </div>
            <div>
                <Field
                    name="favoriteColor"
                    component={renderSelectField}
                    label="Country"
                >
                </Field>
            </div>
            <div>
                <button type="submit" className={props.classes.button} disabled={pristine || submitting}>Отправить</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'MaterialUiForm', // a unique identifier for this form
    // validate,
    // asyncValidate,
})(withStyles(styles)(MaterialUiForm));
