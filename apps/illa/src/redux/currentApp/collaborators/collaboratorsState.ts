
export interface CollaboratorsInfo {
  id: string
  nickname: string
  avatar: string
  roomRole: any
}

export interface CollaboratorsState {
  components: Record<string, CollaboratorsInfo[]>
  inRoomUsers: CollaboratorsInfo[]
}

export const CollaboratorsInitialState: CollaboratorsState = {
  inRoomUsers: [],
  components: {},
}
