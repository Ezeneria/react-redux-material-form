import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const suggestions = [
    {label: 'Afghanistan'},
    {label: 'Aland Islands'},
    {label: 'Albania'},
    {label: 'Algeria'},
    {label: 'American Samoa'},
    {label: 'Andorra'},
    {label: 'Angola'},
    {label: 'Anguilla'},
    {label: 'Antarctica'},
    {label: 'Antigua and Barbuda'},
    {label: 'Argentina'},
    {label: 'Armenia'},
    {label: 'Aruba'},
    {label: 'Australia'},
    {label: 'Austria'},
    {label: 'Azerbaijan'},
    {label: 'Bahamas'},
    {label: 'Bahrain'},
    {label: 'Bangladesh'},
    {label: 'Barbados'},
    {label: 'Belarus'},
    {label: 'Belgium'},
    {label: 'Belize'},
    {label: 'Benin'},
    {label: 'Bermuda'},
    {label: 'Bhutan'},
    {label: 'Bolivia, Plurinational State of'},
    {label: 'Bonaire, Sint Eustatius and Saba'},
    {label: 'Bosnia and Herzegovina'},
    {label: 'Botswana'},
    {label: 'Bouvet Island'},
    {label: 'Brazil'},
    {label: 'British Indian Ocean Territory'},
    {label: 'Brunei Darussalam'},
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    focused: {
        '&:after': {
            borderBottomColor: '#acb446!important',
        },
        '&:hover': {
            '&:before': {
                borderBottom: '#b43c1e',
            },
        }
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
    ololol: {
        '&:before': {
            borderColor: '#11ae21!important',
        },
        '&:after': {
            borderColor: '#c32b27!important',
        }
    },
    lele:{
        color: '#543'
    }
});

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function inputComponent({inputRef, ...props}) {
    return <div ref={inputRef} {...props} />;
}

//textField inpute autocomplete
function Control(props) {
    return (
        <div>
            <TextField
                fullWidth
                InputProps={{
                    inputComponent,
                    inputProps: {
                        className: props.selectProps.classes.input,
                        inputRef: props.innerRef,
                        children: props.children,
                        ...props.innerProps,
                    },
                }}
                {...props.selectProps.textFieldProps}
            />
        </div>
    );
}

//option's select
function Option(props) {
    return (
        //отвечает за вывод списка,фокус и тд
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

//отвечает за вывод элемента списка
function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

const components = {
    Option,
    Control,
    NoOptionsMessage,
    Placeholder,
    Menu,
};

class IntegrationReactSelect extends React.Component {
    state = {
        single: null,
        multi: null,
    };

    handleChange = name => value => {
        this.setState({
            [name]: value,
        });
        this.props.changed.onChange(value.value)
    };

    render() {
        const {classes} = this.props;
        const selectStyles = {};
        return (
            <div className={classes.root}>
                <NoSsr>
                    <Select
                        fullWidth
                        className={{selectMenu : classes.ololol}}
                        classes={classes}
                        // MenuProps ={{className: classes.lele}}
                        // inputProps={{className: classes.lele}}
                        styles={selectStyles}
                        options={suggestions}
                        components={components}
                        value={this.state.single}
                        onChange={this.handleChange('single')}
                        placeholder="Search a country (start with a)"
                    />
                    <div className={classes.divider}/>
                </NoSsr>
            </div>
        );
    }
}

IntegrationReactSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(IntegrationReactSelect);