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
      chats: {
        Row: {
          created_at: string
          id: string
          message: string
          reciever: string
          sender: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          reciever: string
          sender: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          reciever?: string
          sender?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
