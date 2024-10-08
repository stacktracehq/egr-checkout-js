import { FieldProps } from 'formik';
import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { TranslatedString } from '../locale';
import { CheckboxFormField, Fieldset, FormField, Label, Legend, TextInput } from '../ui/form';

const OrderComments: FunctionComponent = () => {
    const renderLabel = useCallback(
        (name) => (
            <Label hidden htmlFor={name}>
                <TranslatedString id="shipping.order_comment_label" />
            </Label>
        ),
        [],
    );

    const renderInput = useCallback(
        ({ field }: FieldProps) => <TextInput {...field} autoComplete="off" maxLength={2000} />,
        [],
    );

    const authorityToLeaveLabel = "Do you give us Authority to Leave your order without signature?";

    const legend = useMemo(
        () => (
            <Legend>
                <TranslatedString id="shipping.order_comment_label" />
            </Legend>
        ),
        [],
    );

    return (
        <Fieldset legend={legend} testId="checkout-shipping-comments">
            <CheckboxFormField labelContent={authorityToLeaveLabel} name="authorityToLeave" />
            <FormField input={renderInput} label={renderLabel} name="orderComment" />
        </Fieldset>
    );
};

export default OrderComments;
