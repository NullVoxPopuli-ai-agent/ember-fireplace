# Helpers

Helpers associate JavaScript functions and invoke them from a template.
The association is done through a [manager](../advanced/managers.md) which in short tells the template _how_ to call that function.
As part of this association through a manager, a helper can access Ember's [DI system](../concepts/dependency-injection.md).

> [!INFO]
> Any regular [JavaScript function](./basics.md#functions) is implemented through a helper.

## Class Based Helpers

Accessing Ember's DI system is commonly done through classes using learned mechanics to access eg. a service.

```ts
import Helper from "@ember/component/helper";
import type { IntlService } from "ember-intl";

type Positional = [Temporal.Duration];
type Named = Intl.DurationFormatOptions;

export interface TemporalDurationFormatterSignature {
  Args: {
    Positional: Positional;
    Named: Named;
  };
  Return: string;
}

class TemporalDurationFormatter extends Helper<TemporalDurationFormatterSignature> {
  @service declare intl: IntlService;

  compute([duration], options) {
    const formatter = new Intl.DurationFormat(this.intl.locale, options);
    return formatter.format(duration);
  }
}
```

## Writing Your Own Helpers

You can write your own helpers with the help of your own [manager](../advanced/managers.md), defining the capabilities for your use-case.
Follow [RFC #625](https://rfcs.emberjs.com/id/0625-helper-managers) for a detailed description of the API.
