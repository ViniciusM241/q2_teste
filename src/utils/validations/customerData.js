import Joi from 'joi';
import messages from './messages';

const schema = Joi.object().keys({
    id: Joi.number().required().label('ID').messages(messages),
    name: Joi.string().required().label('Nome').messages(messages),
    createdAt: Joi.date().required().label('Data de cadastro').messages(messages),
    document: Joi.string().required().label('Documento').max(18).messages(messages),
    bank: Joi.object({
      bankName: Joi.string().required().label('Nome do banco').messages(messages),
      code: Joi.string().required().label('Código do banco').messages(messages),
      agency: Joi.string().required().label('Agência').messages(messages),
      account: Joi.string().required().label('Conta').messages(messages),
    }).required().messages(messages),
});

export default schema;
