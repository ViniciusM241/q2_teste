import moment from 'moment';

export function cnpj(cnpj) {
  cnpj = cnpj.replace(/\D/g,"");
  cnpj = cnpj.replace(/^(\d{2})(\d)/,"$1.$2");
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
  cnpj = cnpj.replace(/\.(\d{3})(\d)/,".$1/$2");
  cnpj = cnpj.replace(/(\d{4})(\d)/,"$1-$2");

  return cnpj;
}

export function cpf(cpf) {
  cpf = cpf.replace(/\D/g,"");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

  return cpf;
}

export function number(value) {
  return value.replace(/[^\d-]/g, "");
}

export function formatDate(date) {
  if (!moment(date).isValid()) return '';

  return moment(date).format('DD/MM/yyyy HH[h]MM');
}
