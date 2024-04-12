import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from '../ui/Input';

const placeholderText = 'Инпут';
const mockText = 'Текст'

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
})