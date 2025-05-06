import { Meta, StoryObj } from '@storybook/react';
import { JsonTree } from '../../json-visualizer/components/JsonTree';
import { isTwoFirstDepths } from '../../json-visualizer/utils/isTwoFirstDepths';

const meta: Meta<typeof JsonTree> = {
  title: 'Twenty UI/JsonVisualizer/JsonTree',
  component: JsonTree,
  args: {
    shouldExpandNodeInitially: () => true,
    emptyArrayLabel: 'Empty Array',
    emptyObjectLabel: 'Empty Object',
    emptyStringLabel: '[empty string]',
    arrowButtonCollapsedLabel: 'Expand',
    arrowButtonExpandedLabel: 'Collapse',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof JsonTree>;

export const String: Story = {
  args: {
    value: 'Hello',
  },
};

export const StringWithSpecialCharacters: Story = {
  args: {
    value: 'Merry \n Christmas \t 🎄',
  },
};

export const Number: Story = {
  args: {
    value: 42,
  },
};

export const Boolean: Story = {
  args: {
    value: true,
  },
};

export const Null: Story = {
  args: {
    value: null,
  },
};

export const ArraySimple: Story = {
  args: {
    value: [1, 2, 3],
  },
};

export const ArrayEmpty: Story = {
  args: {
    value: [],
  },
};

export const ArrayNested: Story = {
  args: {
    value: [1, 2, ['a', 'b', 'c'], 3],
  },
};

export const ArrayNestedEmpty: Story = {
  args: {
    value: [1, 2, [], 3],
  },
};

export const ArrayWithObjects: Story = {
  args: {
    value: [
      {
        name: 'John Doe',
        age: 30,
      },
      {
        name: 'John Dowl',
        age: 42,
      },
    ],
  },
};

export const ObjectSimple: Story = {
  args: {
    value: {
      name: 'John Doe',
      age: 30,
    },
  },
};

export const ObjectEmpty: Story = {
  args: {
    value: {},
  },
};

export const ObjectNested: Story = {
  args: {
    value: {
      person: {
        name: 'John Doe',
        address: {
          street: '123 Main St',
          city: 'New York',
        },
      },
      isActive: true,
    },
  },
};

export const ObjectNestedEmpty: Story = {
  args: {
    value: {
      person: {},
    },
  },
};

export const ObjectWithArray: Story = {
  args: {
    value: {
      users: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ],
      settings: {
        theme: 'dark',
        notifications: true,
      },
    },
  },
};

export const NestedElementCanBeCollapsed: Story = {
  args: {
    value: {
      person: {
        name: 'John Doe',
        age: 12,
      },
      isActive: true,
    },
  },
};

export const ExpandingElementExpandsAllItsDescendants: Story = {
  args: {
    value: {
      person: {
        name: 'John Doe',
        address: {
          street: '123 Main St',
          city: 'New York',
          country: {
            name: 'USA',
            code: 'US',
          },
        },
      },
      isActive: true,
    },
  },
};

export const ExpandTwoFirstDepths: Story = {
  args: {
    value: {
      person: {
        name: 'John Doe',
        address: {
          street: '123 Main St',
          city: 'New York',
          country: {
            name: 'USA',
            code: 'US',
          },
        },
      },
      isActive: true,
    },
    shouldExpandNodeInitially: isTwoFirstDepths,
  },
};

export const ReallyDeepNestedObject: Story = {
  args: {
    value: {
      a: {
        b: {
          c: {
            d: {
              e: {
                f: {
                  g: {
                    h: {
                      i: {
                        j: {
                          k: {
                            l: {
                              m: {
                                n: {
                                  o: {
                                    p: {
                                      q: {
                                        r: {
                                          s: {
                                            t: {
                                              u: {
                                                v: {
                                                  w: {
                                                    x: {
                                                      y: {
                                                        z: {
                                                          end: true,
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        bis: {
          c: {
            d: {
              e: {
                f: {
                  g: {
                    h: {
                      i: {
                        j: {
                          k: {
                            l: {
                              m: {
                                n: {
                                  o: {
                                    p: {
                                      q: {
                                        r: {
                                          s: {
                                            t: {
                                              u: {
                                                v: {
                                                  w: {
                                                    x: {
                                                      y: {
                                                        z: {
                                                          end: true,
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const LongText: Story = {
  args: {
    value: {
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis est tincidunt, sagittis neque vitae, sodales purus.':
        'Ut lobortis ultricies purus, sit amet porta eros. Suspendisse efficitur quam vitae diam imperdiet feugiat. Etiam vel bibendum elit.',
    },
  },
};

export const BlueHighlighting: Story = {
  args: {
    value: {
      name: 'John Doe',
      age: 30,
    },
    getNodeHighlighting: () => 'blue',
  },
};

export const PartialBlueHighlighting: Story = {
  args: {
    value: {
      name: 'John Doe',
      age: 30,
      address: {
        city: 'Paris',
      },
    },
    getNodeHighlighting: (keyPath: string) =>
      keyPath === 'address' ? 'partial-blue' : undefined,
  },
};

export const RedHighlighting: Story = {
  args: {
    value: {
      name: 'John Doe',
      age: 30,
    },
    getNodeHighlighting: () => 'red',
  },
};

export const CopyJsonNodeValue: Story = {
  args: {
    value: {
      name: 'John Doe',
      age: 30,
    },
  },
};
