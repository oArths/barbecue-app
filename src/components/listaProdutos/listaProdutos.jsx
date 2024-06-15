import * as S from "./style.jsx";

export const ListaProdutos = ({ name, data }) => {
  console.log(data);

  return (
    <>
      <S.ContainerTitle>{name}</S.ContainerTitle>
      <S.List
        data={data}
        renderItem={({ item }) => (
          <S.ContainerOp>
            <S.Op>
              <S.ContainerType>{item.nome}</S.ContainerType>
              <S.ContainerPrice>R$ {item.preco}</S.ContainerPrice>
            </S.Op>
          </S.ContainerOp>
        )}
      />
    </>
  );
};
