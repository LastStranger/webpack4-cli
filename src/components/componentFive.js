import React from 'react';
import { Button, Form, Input } from 'antd';

const FormItem = Form.Item;

@Form.create()
class ComponentFive extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleSubmit = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <div style={{ width: '1000px' }}>
                <Form {...formItemLayout}>
                    <FormItem label="what's your problem?">
                        {getFieldDecorator('problem', {
                            rules: [
                                {
                                    required: true,
                                    message: 'The input is not valid E-mail!',
                                },
                            ],
                            whitespace: true,
                        })(<Input/>)}
                    </FormItem>
                    <FormItem label="what's your problem, say that again?">
                        {getFieldDecorator('problemAgain', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                            ],
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button onClick={this.handleSubmit}>提交</Button>
                    </FormItem>
                    <FormItem label="what's your problem, say that again?">
                        {getFieldDecorator('problemAgain1', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                            ],
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button onClick={this.handleSubmit}>提交</Button>
                    </FormItem>
                    <FormItem label="what's your problem, say that again?">
                        {getFieldDecorator('problemAgain2', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                            ],
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button onClick={this.handleSubmit}>提交</Button>
                    </FormItem>
                    <FormItem label="what's your problem, say that again?">
                        {getFieldDecorator('problemAgain3', {
                            rules: [
                                {
                                    required: true,
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                            ],
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button onClick={this.handleSubmit}>提交</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default ComponentFive;
