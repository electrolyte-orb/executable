export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Blocklist: {
        Row: {
          blockedId: string
          id: string
          ownerId: string
        }
        Insert: {
          blockedId: string
          id?: string
          ownerId: string
        }
        Update: {
          blockedId?: string
          id?: string
          ownerId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Blocklist_blockedId_fkey"
            columns: ["blockedId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Blocklist_blockedId_fkey"
            columns: ["blockedId"]
            referencedRelation: "GetContactsWithProfiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Blocklist_ownerId_fkey"
            columns: ["ownerId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Blocklist_ownerId_fkey"
            columns: ["ownerId"]
            referencedRelation: "GetContactsWithProfiles"
            referencedColumns: ["id"]
          }
        ]
      }
      Contact: {
        Row: {
          friend: string
          id: string
          ownerId: string
          savedName: string
          unseenMessages: number | null
        }
        Insert: {
          friend: string
          id?: string
          ownerId: string
          savedName?: string
          unseenMessages?: number | null
        }
        Update: {
          friend?: string
          id?: string
          ownerId?: string
          savedName?: string
          unseenMessages?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Contact_friend_fkey"
            columns: ["friend"]
            referencedRelation: "Friend"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Contact_ownerId_fkey"
            columns: ["ownerId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Contact_ownerId_fkey"
            columns: ["ownerId"]
            referencedRelation: "GetContactsWithProfiles"
            referencedColumns: ["id"]
          }
        ]
      }
      Friend: {
        Row: {
          friendId: string
          id: string
          ownerId: string
        }
        Insert: {
          friendId: string
          id?: string
          ownerId: string
        }
        Update: {
          friendId?: string
          id?: string
          ownerId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Friend_friendId_fkey"
            columns: ["friendId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Friend_friendId_fkey"
            columns: ["friendId"]
            referencedRelation: "GetContactsWithProfiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Friend_ownerId_fkey"
            columns: ["ownerId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Friend_ownerId_fkey"
            columns: ["ownerId"]
            referencedRelation: "GetContactsWithProfiles"
            referencedColumns: ["id"]
          }
        ]
      }
      Message: {
        Row: {
          createdAt: string | null
          id: string
          isNotReadable: boolean | null
          message: string
          receiverId: string
          senderId: string
        }
        Insert: {
          createdAt?: string | null
          id?: string
          isNotReadable?: boolean | null
          message: string
          receiverId: string
          senderId: string
        }
        Update: {
          createdAt?: string | null
          id?: string
          isNotReadable?: boolean | null
          message?: string
          receiverId?: string
          senderId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Message_receiverId_fkey"
            columns: ["receiverId"]
            referencedRelation: "Friend"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Message_senderId_fkey"
            columns: ["senderId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Message_senderId_fkey"
            columns: ["senderId"]
            referencedRelation: "GetContactsWithProfiles"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          id: string
          pictureUrl: string | null
          username: string
        }
        Insert: {
          id: string
          pictureUrl?: string | null
          username: string
        }
        Update: {
          id?: string
          pictureUrl?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "User_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      GetContactsWithProfiles: {
        Row: {
          friend: string | null
          id: string | null
          ownerId: string | null
          pictureUrl: string | null
          savedName: string | null
          unseenMessages: number | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Contact_friend_fkey"
            columns: ["friend"]
            referencedRelation: "Friend"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Contact_ownerId_fkey"
            columns: ["ownerId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Contact_ownerId_fkey"
            columns: ["ownerId"]
            referencedRelation: "GetContactsWithProfiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "User_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      create_new_friend_contact: {
        Args: {
          friend_id: string
          contact_name: string
        }
        Returns: undefined
      }
      is_blocked: {
        Args: {
          blockerid: string
          blockedid: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
