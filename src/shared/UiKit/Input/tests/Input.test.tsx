import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from '../ui/Input';

const placeholderText = 'Инпут';
const mockText = 'Текст';
const mockMessage = 'Ошибка';

describe('Тесты для компонента <Input/>', () => {
    test('Рендерим <Input />', () => {
        render(<Input placeholder={placeholderText}/>);
        const inputElement = screen.getByPlaceholderText(placeholderText);
        expect(inputElement).toBeInTheDocument();
    })
    
    test('Меняем value <Input />', () => {
        render(<Input placeholder={placeholderText}/>);
        const inputElement = screen.getByPlaceholderText(placeholderText);
        fireEvent.change(inputElement, {target: { value: mockText}});
        expect(inputElement).toHaveValue(mockText)
    })

    test('Проверяем работу валидации', async () => {
        render(<Input placeholder={placeholderText} message={mockMessage}/>);
        const errorMessage = await screen.findByText(mockMessage);
        expect(errorMessage).toBeInTheDocument();
    })
})