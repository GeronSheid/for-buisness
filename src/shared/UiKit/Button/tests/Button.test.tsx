import '@testing-library/jest-dom';
import { fireEvent, render, screen} from "@testing-library/react";
import { Button } from '../ui/Button';

const testTxt = 'Кнопка';
const testLink = 'https://www.google.com/?hl=ru';
const mockAction = jest.fn();

describe('Тесты для компонента <Button/>', () => {
    test('Рендерим кнопку <Button/>', () => {
        render(<Button type='btn'>{testTxt}</Button>);
        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeInTheDocument();
    })
    
    test('Рендерим ссылку <Button/>', () => {
        render(<Button type='link' href={testLink}>{testTxt}</Button>);
        const btnElement = screen.getByRole('link');
        expect(btnElement).toBeInTheDocument();
    })

    test('Передаем btnType в <Button/>', () => {
        render(<Button type='btn' btnType='reset'>{testTxt}</Button>);
        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeInTheDocument();
        expect(btnElement).toHaveAttribute('type', 'reset')
    })

    test('Проверяем передачу текста', () => {
        render(<Button type='btn'>{testTxt}</Button>);
        const btnElement = screen.getByText(testTxt);
        expect(btnElement).toBeInTheDocument();
    })

    test('Проверяем выполнение onClick', () => {
        render(<Button type='btn' onClick={mockAction}>{testTxt}</Button>);
        const btnElement = screen.getByText(testTxt);
        fireEvent.click(btnElement);
        expect(mockAction).toHaveBeenCalled();
    })
})