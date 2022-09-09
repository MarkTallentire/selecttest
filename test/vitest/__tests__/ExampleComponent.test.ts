import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ExampleComponent from 'src/components/ExampleComponent.vue';
import { fireEvent, render, screen } from '@testing-library/vue';
import { Quasar } from 'quasar';

describe('example Component', () => {
  it('should throw a validation error if no option is selected', async () => {
    render(ExampleComponent, {
      global: {
        plugins: [Quasar],
      },
    });

    const selectBox = screen.getByLabelText('Options Box');
    const clickOffTarget = screen.getByRole('button');

    screen.debug(selectBox);
    screen.debug(clickOffTarget);

    await fireEvent.click(selectBox);
    await fireEvent.click(clickOffTarget);

    expect(await screen.findByText(/Option is required/i));
  });
});
