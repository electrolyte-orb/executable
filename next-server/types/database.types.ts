export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Contact: {
        Row: {
          contactId: string;
          id: string;
          ownerId: string;
          savedName: string;
          unseenMessages: number | null;
        };
        Insert: {
          contactId: string;
          id?: string;
          ownerId: string;
          savedName: string;
          unseenMessages?: number | null;
        };
        Update: {
          contactId?: string;
          id?: string;
          ownerId?: string;
          savedName?: string;
          unseenMessages?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "Contact_contactId_fkey";
            columns: ["contactId"];
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Contact_ownerId_fkey";
            columns: ["ownerId"];
            referencedRelation: "User";
            referencedColumns: ["id"];
          }
        ];
      };
      Message: {
        Row: {
          createdAt: string;
          id: string;
          message: string;
          receiverId: string;
          senderId: string;
        };
        Insert: {
          createdAt?: string;
          id?: string;
          message: string;
          receiverId: string;
          senderId: string;
        };
        Update: {
          createdAt?: string;
          id?: string;
          message?: string;
          receiverId?: string;
          senderId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Message_receiverId_fkey";
            columns: ["receiverId"];
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Message_senderId_fkey";
            columns: ["senderId"];
            referencedRelation: "User";
            referencedColumns: ["id"];
          }
        ];
      };
      User: {
        Row: {
          id: string;
          pictureUrl: string | null;
          supabaseId: string;
          username: string;
        };
        Insert: {
          id?: string;
          pictureUrl?: string | null;
          supabaseId: string;
          username: string;
        };
        Update: {
          id?: string;
          pictureUrl?: string | null;
          supabaseId?: string;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: "User_supabaseId_fkey";
            columns: ["supabaseId"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
