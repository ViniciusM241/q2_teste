import React from "react";
import { Inline } from "~/components";
import { Button } from './styles';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import colors from "~/utils/colors";

function Pagination({
  maxPage,
  setFilters,
  pageIndex,
  total,
}) {
  const totalPage = total / maxPage;

  if (pageIndex + 1 > totalPage) {
    pageIndex = totalPage - 1;
  }

  const maxToShow = 2;
  const plus = pageIndex + maxToShow >= totalPage ? pageIndex + maxToShow > totalPage ? maxToShow : pageIndex : 1;
  const buttonsQty = [...Array(totalPage).keys()].map(x => x + plus);

  const handleChangeIndex = (index) => {
    setFilters(state => ({
      ...state,
      pageIndex: index,
    }));
  };

  return (
    <Inline className="mt-20" center>
      {
        pageIndex +1 >= maxToShow && (
          <LeftOutlined
            style={{
              color: colors.LIGHT_BLUE,
              cursor: 'pointer',
            }}
            onClick={() => handleChangeIndex(pageIndex - 1)}
          />
        )
      }
      {
        buttonsQty.slice(0, maxToShow).map(index => (
          <Button
            className="ml-10"
            key={index}
            active={index === pageIndex + 1}
            onClick={() => handleChangeIndex(index -1)}
          >
            {index}
          </Button>
        ))
      }
      {
        pageIndex +2 < totalPage && (
          <span className="ml-10">
            ...
          </span>
        )
      }
      <Button
        className="ml-10"
        active={pageIndex + 1 === totalPage}
        onClick={() => handleChangeIndex(totalPage -1)}
      >
        {totalPage}
      </Button>
      {
        pageIndex +1 < totalPage && (
          <RightOutlined
            className="ml-10"
            style={{
              color: colors.LIGHT_BLUE,
              cursor: 'pointer',
            }}
            onClick={() => handleChangeIndex(pageIndex + 1)}
          />
        )
      }
    </Inline>
  );
}

export default Pagination;
