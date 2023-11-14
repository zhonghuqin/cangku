import Drag1 from './drag-components/drag1.vue'
import Drag2 from './drag-components/drag2.vue'
import Drag3 from './drag-components/drag3.vue'
export const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#2D8CF0',
          strokeWidth: 2,
          fill: '#fff',
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#2D8CF0',
          strokeWidth: 2,
          fill: '#fff',
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#2D8CF0',
          strokeWidth: 2,
          fill: '#fff',
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#2D8CF0',
          strokeWidth: 2,
          fill: '#fff',
        },
      },
    },
  },
  items: [
    {
      id: 'port1',
      group: 'top',
    },
    {
      id: 'port2',
      group: 'bottom',
    },
    {
      id: 'port3',
      group: 'left',
    },
    {
      id: 'port4',
      group: 'right',
    }
  ],
}

export const EDGE_TOOLS =  [
  {
    name: "button-remove", // 工具名称
    args: {
      // 工具对应的参数
      x: 10,
      y: 10,
    },
  },
  {
    name: "segments", // 工具名称
    args: {
      // 工具对应的参数
      x: 10,
      y: 10,
    },
  },
  {
    name: "vertices", // 工具名称
    args: {
      // 工具对应的参数
      x: 10,
      y: 10,
    },
  },
  {
    name: "source-arrowhead", // 工具名称
    args: {
      // 工具对应的参数
      x: 10,
      y: 10,
    },
  },
  {
    name: "target-arrowhead", // 工具名称
    args: {
      // 工具对应的参数
      x: 10,
      y: 10,
    },
  }
]

export const NODE_TOOLS = [
  {
    name: "button-remove", // 工具名称
    args: {
      // 工具对应的参数
      x: 10,
      y: 10,
    },
  },
]

export const NODE_LIST = [
  {
    width: 150,
    height: 100,
    shape: "Drag1",
    component: Drag1,
  },

  {
    width: 100,
    height: 100,
    shape: "Drag1",
    component: Drag1,
  },
  {
    width: 100,
    height: 100,
    shape: "Drag2",
    component: Drag2,
  },
  {
    width: 100,
    height: 100,
    shape: "Drag3",
    component: Drag3,
  },
  {
    width: 160,
    height: 100,
    shape: "Drag3",
    component: Drag3,
  },
  {
    width: 90,
    height: 70,
    shape: "Drag3",
    component: Drag3,
  },
  {
    width: 90,
    height: 70,
    shape: "Drag3",
    component: Drag3,
  },
  {
    width: 70,
    height: 50,
    shape: "Drag3",
    component: Drag3,
  },

]