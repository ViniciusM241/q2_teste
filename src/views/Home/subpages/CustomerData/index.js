import React, { useState, useEffect } from "react";
import {
  Container,
  Inline,
  Col,
  T1,
  T3,
  Form,
  Line,
  Input,
} from '~/components';
import { LeftOutlined, SaveFilled, EditFilled, CloseOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCustomerById, setCustomer } from "./store/actions";
import useBreakpoints from "~/hooks/useBreakpoints";
import colors from "~/utils/colors";
import { cnpj, cpf, number, formatDate } from '~/utils/masks';
import validationSchema from '~/utils/validations/customerData';
import { StyledIconButton } from './styles';
import saveCustomer from "./services/saveCustomer";
import { ToastContainer, toast } from 'react-toastify';

function CustomerData() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const breakpoints = useBreakpoints();

  const customer = useSelector(state => state.customer.customer);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const id = location.pathname.split('/')[3];

    if (isNaN(id)) return navigate('/home');

    dispatch(getCustomerById(id));
  }, [location]);

  const handleSubmit = async ({ values }) => {
    setIsEditable(false);

    const res = await saveCustomer(values);

    if (res.status === 200) {
      toast.success('Dados salvos com sucesso');

      dispatch(setCustomer(values));
    } else {
      toast.error('Houve um erro ao salvar. Tente novamente mais tarde');

      dispatch(setCustomer(customer));
    }
  };

  return (
    <Container>
      <Inline>
        <Col cols={1}>
          <LeftOutlined
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/home')}
          />
        </Col>
        <Col cols={10} xs={11}>
          <T1> Dados do cliente </T1>
        </Col>
        <Col cols={1} xs={12}>
          <Inline
            right
          >
            <StyledIconButton
              aria-label={isEditable ? 'Salvar' : 'Editar'}
              onClick={() => {
                if (isEditable) {
                  const submitButton = document.getElementById('submit');
                  submitButton.click();
                } else {
                  setIsEditable(!isEditable);
                }
              }}
            >
              {
                isEditable ? (
                  <SaveFilled style={{fontSize: '.8rem'}} />
                ) : (
                  <EditFilled style={{fontSize: '.8rem'}} />
                )
              }
            </StyledIconButton>
            {
              isEditable && (
                <StyledIconButton
                  aria-label="Cancelar"
                  className="ml-10"
                  onClick={() => {
                    dispatch(setCustomer({...customer}));
                    setIsEditable(false);
                  }}
                >
                  <CloseOutlined style={{fontSize: '.8rem'}} />
                </StyledIconButton>
              )
            }
          </Inline>
        </Col>
      </Inline>
      <Form
        id="customer-data"
        initialValues={customer}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        className="mt-40"
      >
        {
          () => (
            <Inline className="mb-20">
              <Col cols={2} xs={12}>
                <T3>Dados pessoais</T3>
              </Col>
              <Col className={breakpoints.xs ? "mt-20" : ""} cols={10} xs={12}>
                <Line color={isEditable ? colors.LIGHT_BLUE_30 : null} />
              </Col>
              <Col className="mt-20" cols={3} xs={12}>
                <Input
                  type="text"
                  name="createdAt"
                  label="Data de cadastro"
                  valueMask={formatDate}
                  disabled
                />
              </Col>
              <Col cols={1} xs={0} />
              <Col className="mt-20" cols={4} xs={12}>
                <Input
                  type="text"
                  name="name"
                  label="Nome"
                  disabled={!isEditable}
                />
              </Col>
              <Col cols={1} />
              <Col className="mt-20" cols={3} xs={12}>
                <Input
                  type="text"
                  name="document"
                  label="Documento"
                  disabled={!isEditable}
                  maxLength={18}
                  valueMask={(text) => {
                    if (text.length <= 14)
                      return cpf(text);
                    else
                      return cnpj(text);
                  }}
                />
              </Col>
              <Col className="mt-40 mb-20" cols={2} xs={12}>
                <T3>Dados bancários</T3>
              </Col>
              <Col className={breakpoints.xs ? "" : "mt-20"} cols={10} xs={12}>
                <Line color={isEditable ? colors.LIGHT_BLUE_30 : null} />
              </Col>
              <Col className="mt-20" cols={5} xs={12}>
                <Input
                  type="text"
                  name="bank.bankName"
                  label="Banco"
                  disabled={!isEditable}
                />
              </Col>
              <Col cols={1} xs={0} />
              <Col className="mt-20" cols={2} xs={12}>
                <Input
                  type="text"
                  name="bank.agency"
                  label="Agência"
                  disabled={!isEditable}
                  valueMask={(text) => {
                    return number(text);
                  }}
                />
              </Col>
              <Col cols={1} xs={0} />
              <Col className="mt-20" cols={3} xs={12}>
                <Input
                  type="text"
                  name="bank.account"
                  label="Conta"
                  disabled={!isEditable}
                  valueMask={(text) => {
                    return number(text);
                  }}
                />
              </Col>
              <button type="submit" id="submit" style={{display: 'none'}}></button>
            </Inline>
          )
        }
      </Form>
      <ToastContainer />
    </Container>
  );
}

export default CustomerData;
