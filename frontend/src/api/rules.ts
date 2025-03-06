// frontend/src/api/rules.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/rules";

export interface RuleBook {
  filename: string;
  title: string;
  description: string;
  size: number;
  url: string;
}

export interface RuleCategory {
  id: string;
  name: string;
  books: RuleBook[];
}

/**
 * 获取所有规则书分类
 */
export const getRuleBooks = async (): Promise<RuleCategory[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/`);
    return response.data.data;
  } catch (error) {
    console.error("❌ 获取规则书失败:", error);
    return [];
  }
};

/**
 * 获取查看特定PDF的URL
 */
export const getPDFViewUrl = (filename: string): string => {
  return `${API_BASE_URL}/pdf/${filename}`;
};