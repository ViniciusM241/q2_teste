import React, { useEffect, useState } from 'react';
import { StyledForm } from './styles';

function Form({
  children,
  onSubmit,
  initialValues={},
  validationSchema,
  ...props
}) {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const getObjectValue = (string) => {
    const value = string.split('.').reduce((a, b) => a[b], values);

    return value;
  };

  const handleValidation = () => {
    const res = validationSchema.validate(values, { abortEarly: false });

    if (res.error) {
      let errorsList = {};

      res.error.details.forEach(error => {
          const field = error.context.key;
          errorsList = {
              ...errorsList,
              [field]: error.message,
          };
      });

      setErrors(errorsList);

      return false;
    } else {
      setErrors({});

      return true;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (validationSchema) {
      const isValid = handleValidation();

      if (!isValid) return;
    }

    onSubmit({
      values,
      errors,
    });
  };

  const handleOnChange = (e, field) => {
    const newText = e.target.value;
    const splitted = field.split('.');

    if (splitted.length > 1) {
      const newObject = { ...values[splitted[0]], [splitted[1]]: newText };

      return setValues(state => ({
        ...state,
        [splitted[0]]: newObject,
      }));
    }

    return setValues(state => ({
      ...state,
      [field]: newText,
    }));
  };

  const handleValue = (value, element) => {
    if (element.props.valueMask)
      return element.props.valueMask(value);
    return value;
  }

  const injectDependencies = (child) => {
    if (typeof child === 'string') return child;

    const newChild = {
      ...child,
      props: {
        ...child.props,
      },
    };

    if (child.props?.children) {
      if (Array.isArray(child.props.children)) {
        newChild.props.children = child.props.children.map(item => injectDependencies(item));
      }
      else {
        newChild.props.children = injectDependencies(child.props.children);
      }
    }

    if (child.props?.type === 'submit') {
      newChild.props = {
        ...child.props,
        onClick: handleOnSubmit,
      };
    }

    if (child.props?.name && child.props?.type) {
      newChild.props = {
        ...child.props,
        value: handleValue(Object.prototype.hasOwnProperty.call(values, child.props.name.split('.')[0]) ? getObjectValue(child.props.name) : '', child),
        error: errors[child.props.name],
        onChange: (e) => {
          let value = e;

          if (child.props.onChange)
            value.target.value = child.props.onChange(e.target.value, e);

          handleOnChange(value, child.props.name)
        },
      };
    }

    return newChild;
  };

  const handleChildren = (childrenElements) => {
    let elements = childrenElements;

    if (typeof childrenElements === 'function') {
      elements = childrenElements({
        values,
        onSubmit,
      });
    }

    if (Array.isArray(elements)) {
      return elements.map(child => {
        return injectDependencies(child);
      });
    }

    return injectDependencies(elements);
  };

  return (
    <StyledForm {...props}>
      {handleChildren(children)}
    </StyledForm>
  );
}

export default Form;
