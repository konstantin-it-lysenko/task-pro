import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBoard } from '../../../redux/board/boardOperations';
import ModalWrapper from 'components/Modals/ModalWrapper/ModalWrapper';
import {
  TitleContainer,
  Title,
  ClearFilterBox,
  ClearTitle,
  ClearButton,
  RadioButtonBox,
  RadioButton,
  PriorityFilterLabel,
  StyledMarker,
} from './Filters.styled';

const Filters = ({ boardId, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [filterValue, setFilterValue] = useState('default');

  const handleFilterChange = newValue => {
    setFilterValue(newValue);
    console.log(newValue);
    console.log(boardId);
    dispatch(filterBoard({ boardId: boardId, priority: newValue }));
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <ModalWrapper width={300} onClose={() => setIsModalOpen(false)}>
          <TitleContainer>
            <Title>{t('boards.filterButton')}</Title>
          </TitleContainer>
          <ClearFilterBox>
            <ClearTitle>{t('boards.filter.label')}</ClearTitle>
            <ClearButton
              type="button"
              onClick={() => handleFilterChange('default')}
            >
              {t('boards.filter.all')}
            </ClearButton>
          </ClearFilterBox>
          <RadioButtonBox>
            <PriorityFilterLabel className="gray">
              <RadioButton
                type="radio"
                name="priority"
                value="without"
                checked={filterValue === 'without'}
                onChange={() => handleFilterChange('without')}
                className="gray"
              />
              <StyledMarker className="gray"></StyledMarker>
              {t('boards.filter.without')}
            </PriorityFilterLabel>
            <PriorityFilterLabel className="blue">
              <RadioButton
                type="radio"
                name="priority"
                value="low"
                checked={filterValue === 'low'}
                onChange={() => handleFilterChange('low')}
                className="blue"
              />
              <StyledMarker className="blue"></StyledMarker>
              {t('boards.filter.low')}
            </PriorityFilterLabel>
            <PriorityFilterLabel className="red">
              <RadioButton
                type="radio"
                name="priority"
                value="medium"
                checked={filterValue === 'medium'}
                onChange={() => handleFilterChange('medium')}
                className="red"
              />
              <StyledMarker className="red"></StyledMarker>
              {t('boards.filter.medium')}
            </PriorityFilterLabel>
            <PriorityFilterLabel className="green">
              <RadioButton
                type="radio"
                name="priority"
                value="high"
                checked={filterValue === 'high'}
                onChange={() => handleFilterChange('high')}
                className="green"
              />
              <StyledMarker className="green"></StyledMarker>
              {t('boards.filter.high')}
            </PriorityFilterLabel>
          </RadioButtonBox>
        </ModalWrapper>
      )}
    </>
  );
};

export default Filters;
