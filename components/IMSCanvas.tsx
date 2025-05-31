import ReactFlow, {
  MiniMap, Controls, Background, addEdge, useNodesState, useEdgesState, Connection, Edge, MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useCallback } from 'react';

type Props = {
  scenario: string;
};

const initialNodes = [
  { id: 'ue', data: { label: 'UE' }, position: { x: 50, y: 100 }, type: 'default' },
  { id: 'pcscf', data: { label: 'P-CSCF' }, position: { x: 200, y: 100 }, type: 'default' },
  { id: 'icscf', data: { label: 'I-CSCF' }, position: { x: 350, y: 100 }, type: 'default' },
  { id: 'scscf', data: { label: 'S-CSCF' }, position: { x: 500, y: 100 }, type: 'default' },
  { id: 'hss', data: { label: 'HSS' }, position: { x: 500, y: 250 }, type: 'default' },
  { id: 'as', data: { label: 'AS' }, position: { x: 700, y: 100 }, type: 'default' }
];

const initialEdges = [
  {
    id: 'e1', source: 'ue', target: 'pcscf', label: 'SIP INVITE', animated: true,
    style: { stroke: 'green' }, markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'e2', source: 'pcscf', target: 'icscf', label: 'SIP Proxy', animated: true,
    style: { stroke: 'green' }, markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'e3', source: 'icscf', target: 'scscf', label: 'Query S-CSCF', animated: true,
    style: { stroke: 'green' }, markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'e4', source: 'scscf', target: 'hss', label: 'Diameter Auth', animated: true,
    style: { stroke: 'gold' }, markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'e5', source: 'scscf', target: 'as', label: 'Service Trigger', animated: true,
    style: { stroke: 'blue' }, markerEnd: { type: MarkerType.ArrowClosed }
  }
];

export default function IMSCanvas({ scenario }: Props) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: 'black' },
            markerEnd: { type: MarkerType.ArrowClosed }
          },
          eds
        )
      ),
    [setEdges]
  );

  return (
    <div className="flex-1 h-[500px] bg-white p-2 rounded shadow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background gap={12} />
      </ReactFlow>
    </div>
  );
}