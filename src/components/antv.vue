<template>
  <div class="antv">
    <div class="save" @click="save">保存</div>
    <div class="edit" @click="edit">编辑</div>
    <div class="left">
      <template v-for="(item, index) in NODE_LIST" :key="index">
        <component
          class="item"
          :style="{ width: item.width+'px', height: item.height+'px' }"
          @mousedown="startDrag($event, item.shape)"
          :is="item.component">
        </component>
      </template>
    </div>
    <TeleportContainer></TeleportContainer>
    <div id="container" class="right">
    </div>
  </div>
</template>

<script setup lang="ts">
import { markRaw, onMounted, ref } from 'vue';
import { Graph, Shape } from '@antv/x6';
import { ports, EDGE_TOOLS, NODE_TOOLS, NODE_LIST } from './x6Drag'

import { Dnd } from "@antv/x6-plugin-dnd";
import { Snapline } from "@antv/x6-plugin-snapline";
import { Selection } from '@antv/x6-plugin-selection'
import { Export } from "@antv/x6-plugin-export";

import { register, getTeleport  } from '@antv/x6-vue-shape'


NODE_LIST.forEach(item => {
  register(item);
})

const TeleportContainer = getTeleport();

let graph: Graph | null = null
let dnd: Dnd | null = null

onMounted(() => {
  renderVueX6()
})

const renderVueX6 = () => {
  graph = new Graph({
    container: document.getElementById("container") as HTMLElement,
    selecting: true,
    snapline: true, // 对齐线
    history: true, // 启动历史记录
    background: {
      color: '#ffffff'
    },
    // 网格
    grid: {
      size: 10,
      visible: true,
      type: 'doubleMesh',
      args: [
        {
          color: '#E7E8EA',
          thickness: 1
        },
        {
          color: '#CBCED3',
          thickness: 1,
          factor: 5
        }
      ]
    },
    // Scroller 使画布具备滚动、平移、居中、缩放等能力
    scroller: {
      enabled: true,
      pageVisible: true,
      pageBreak: true,
      pannable: true,
    },
    // 鼠标滚轮的默认行为是滚动页面
    mousewheel: {
      enabled: true,
      modifiers: ['ctrl', 'meta'],
      minScale: 0.5,
      maxScale: 2
    },
    // 节点连接
    connecting: {
      anchor: 'center',
      connectionPoint: 'anchor',
      snap: true, // 自动吸附
      allowBlank: false, // 是否允许连接到画布空白位置的点
      allowLoop: false, // 是否允许创建循环连线，即边的起始节点和终止节点为同一节点
      allowNode: false, // 是否允许边链接到节点（非节点上的链接桩）
      highlight: true,
      createEdge () {
        return new Shape.Edge({
          attrs: {
            line: {
              stroke: '#1890ff',
              strokeWidth: 1,
              targetMarker: {
                name: 'classic',
                size: 8
              },
              strokeDasharray: 0, //虚线
              style: {
                animation: 'ant-line 30s infinite linear'
              }
            }
          },
          label: {
            text:''
          },
          router: {
            name: 'manhattan'
          },
          zIndex: 10
        })
      },
      validateConnection({
        sourceView,
        targetView,
        sourceMagnet,
        targetMagnet,
      }: any) {
        if (sourceView === targetView) {
          return false
        }
        if (!sourceMagnet) {
          return false
        }
        if (!targetMagnet) {
          return false
        }
        return true
      }
    },
    // 高亮
    highlighting: {
      magnetAvailable: {
        name: 'stroke',
        args: {
          padding: 4,
          attrs: {
            strokeWidth: 4,
            stroke: '#6a6c8a'
          }
        }
      }
    }
  } as any);
  // 对齐线插件
  graph.use(
    new Snapline({
      enabled: true,
    })
  );
  // 选框插件
  graph.use(
    new Selection({
      enabled: true,
      multiple: true,
      rubberband: true,
      movable: true,
      showNodeSelectionBox: true,
    }),
  )
  // 导出
  graph.use(new Export());
  // 拖动
  dnd = new Dnd({
    target: graph,
  })

  graph.on("edge:mouseenter", ({ e, edge, view }) => {
    edge.addTools(EDGE_TOOLS)
  });

  graph.on('edge:mouseleave', ({ cell }) => {
    cell.removeTools()
  })

  graph.on("node:mouseenter", ({ e, node, view }) => {
    node.addTools(NODE_TOOLS)
  });

  graph.on('node:mouseleave', ({ cell }) => {
    cell.removeTools()
  })
}

const save = () => {
  graph?.getNodes().forEach(node => {
    node.removePorts(ports.items)
  });
  // (graph as any).exportPNG('text', {
  //   preserveDimensions: true,
  //   backgroundColor: '#fff',
  //   padding: 40,
  //   quality: 1
  // })
}

const edit = () => {
  graph?.getNodes().forEach(node => {
    node.addPorts(ports.items)
  });
}

const startDrag = (e: any, shape: string) => {
  const node = (graph as Graph).createNode({
    shape: shape,
    ports
  });
  dnd?.start(node, e);
}
</script>

<style scoped>
.save {
  z-index: 100;
  position: fixed;
  right: 40px;
  top: 40px;
  background: antiquewhite;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
}
.edit {
  z-index: 100;
  position: fixed;
  right: 200px;
  top: 40px;
  background: antiquewhite;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
}
.antv {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.left,
.right {
  height: 100%;
}
.left {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  margin: 10px;
}
.right {
  flex: 1;
}
</style>